# Node require analytics

## What is this?

A simple library for capturing CommonJS `require` analytics in Node.js.  This is useful for visualizing runtime application dependencies and the times it takes to load them.

## How do I use it?

As early as possible in your application, require and start the module analytics gathering like so:

```
const analytics = require('../dist/util/modules').start();
```

Then, at the end of your application, you can dump the results to `stderr`:

```
analytics.dump();
```

You can also process the results manually if you prefer, using `analytics.report()`.

By default, no analytics are actually gathered unless you either run the app with the envar `REQUIRE_ANALYTICS=true` set, _or_ you pass `true` to `start` (which allows you to determine your method of enabling or disabling require analytics collection).
