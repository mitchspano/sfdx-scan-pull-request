# source-tracking

JavaScript library for tracking local and remote Salesforce metadata changes.

You should use the class named SourceTracking.

Start like this:

```ts
import { SourceTracking } from '@salesforce/source-tracking';

const tracking = await SourceTracking.create({
  org: this.org, // Org from sfdx-core
  project: this.project, // Project from sfdx-core
});
```

Any calls to methods on your instance of `tracking` will check to make sure that the appropriate remote/local files are up to date and loaded.

If you know you need to access remote or local, you can `ensure` them so that the FS and API operations don't happen multiple time (useful before calling operations that run in parallel)

```ts
await tracking.ensureRemoteTracking(); // pass `true` if you know you need to force a re-query.
// Example: the library got Remote Changes from the server, but you just did a deploy and know you need to get the updated SourceMembers.

await tracking.ensureLocalTracking();
```

## Use cases

1. push,pull,status: `getConflicts()`, `getChanges()`
1. deploy/retrieve: `updateLocalTracking()`,`updateRemoteTracking`

### Deploy

1. Once your SDR-based deploy finishes, you need to update the client's tracking files for both local (because local files went to the server) AND remote (because your deployment will result in new SourceMembers that need to be synced to the client).

```ts
// send in two arrays of Files (nonDeletes and Deletes)
await tracking.updateLocalTracking({
  deployedFiles: ['force-app/main/default/classes/MyClass.cls', 'force-app/main/default/classes/MyClass.cls-meta.xml'],
  deletedFiles: [],
});

// Pass an array of objects.  The type comes from SDR's FileResponse type, Success variant
// By default, it'll poll the server to get your SourceMembers before committing all the changes to the tracking files
await tracking.updateRemoteTracking([
  {
    fullName: 'MyClass',
    type: 'ApexClass',
    state: 'Changed',
    filePath: 'force-app/main/default/classes/MyClass.cls',
  },
  {
    fullName: 'MyClass',
    type: 'ApexClass',
    state: 'Changed',
    filePath: 'force-app/main/default/classes/MyClass.cls-meta.xml',
  },
]);
```

### Retrieve

Once your retrieve finishes, use the same updateLocalTracking as you did for deploy to commit the file changes to local and remote changes.

```ts
// By default, it'll poll the server to get your SourceMembers before committing all the changes to the tracking files.  If you already queried sourceMembers as part of conflict check, etc you can pass `false` to prevent polling the server again for SourceMembers
await tracking.updateRemoteTracking(
  [
    {
      fullName: 'MyClass',
      type: 'ApexClass',
      state: 'Changed',
      filePath: 'force-app/main/default/classes/MyClass.cls',
    },
    {
      fullName: 'MyClass',
      type: 'ApexClass',
      state: 'Changed',
      filePath: 'force-app/main/default/classes/MyClass.cls-meta.xml',
    },
  ],
  false
);
```
