# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.2.1](https://github.com/forcedotcom/source-tracking/compare/v2.2.0...v2.2.1) (2022-07-05)

### Bug Fixes

- bump core ([#180](https://github.com/forcedotcom/source-tracking/issues/180)) ([bf0c1f7](https://github.com/forcedotcom/source-tracking/commit/bf0c1f71f91701dacd2516914ab2abca33b1d00a))

## [2.2.0](https://github.com/forcedotcom/source-tracking/compare/v2.1.2...v2.2.0) (2022-06-29)

### Features

- event subscription and convenience method for push ([0c2135b](https://github.com/forcedotcom/source-tracking/commit/0c2135ba3076d3d7a3efd1e4d3c41a468e349728))
- local repo cache breaking for get status, and a generic method ([6645b72](https://github.com/forcedotcom/source-tracking/commit/6645b72c4695a15caca8aa6d3dc158a600fd15de))
- never track utam ([6e71f03](https://github.com/forcedotcom/source-tracking/commit/6e71f031c27c4e690d8538253b751da13da0b6e3))
- option to use SDR events ([d86f698](https://github.com/forcedotcom/source-tracking/commit/d86f69896185b68af7e489f6026589957e06f29d))
- top-level cache config of local cache behavior ([236ac28](https://github.com/forcedotcom/source-tracking/commit/236ac28314b45c42eff83b9ab8003d0c39efbbb0))
- track based on sdr events ([1238a68](https://github.com/forcedotcom/source-tracking/commit/1238a686f1d2c6091154ac6370c3d3d019c3a7a7))

### Bug Fixes

- async lifecycle subscribe ([75031f3](https://github.com/forcedotcom/source-tracking/commit/75031f3bbe753001a42f7abcfec1415bfb62547e))
- custom field was not polling correctly (logic error on del\_\_c) ([1ff2341](https://github.com/forcedotcom/source-tracking/commit/1ff23419d737cb2a22bcf070f5b2790b9ef0536d))
- logic on local ignored ([9667a6e](https://github.com/forcedotcom/source-tracking/commit/9667a6e8b442a6df0a42fd42dde4dfc289928f90))
- use fixed jsforce autoFetch, restore ut ([0b32d21](https://github.com/forcedotcom/source-tracking/commit/0b32d217013a346ef8826d3820566b7d70dba3c1))

### [2.1.2](https://github.com/forcedotcom/source-tracking/compare/v2.1.1...v2.1.2) (2022-06-23)

### Bug Fixes

- bump core for autofetch ([3567c69](https://github.com/forcedotcom/source-tracking/commit/3567c69dd49444ef757b9699bb676a0a1a25561c))

### [2.1.1](https://github.com/forcedotcom/source-tracking/compare/v2.1.0...v2.1.1) (2022-06-22)

### Bug Fixes

- core for jsforce autofetch ([406c519](https://github.com/forcedotcom/source-tracking/commit/406c519827571fc8f9be2e8008b1cdd8b7827634))

## [2.1.0](https://github.com/forcedotcom/source-tracking/compare/v2.0.0...v2.1.0) (2022-06-22)

### Features

- use StateAggregator ([8a29ac6](https://github.com/forcedotcom/source-tracking/commit/8a29ac6cc7d4009cac32bd86ce55e82104991d95))

### Bug Fixes

- use await ([ce650bd](https://github.com/forcedotcom/source-tracking/commit/ce650bdc9d18a96adb1b0959c44c4e42eb972e2b))
- use fixed jsforce autoFetch, restore ut ([f52afd0](https://github.com/forcedotcom/source-tracking/commit/f52afd055d05c6c577e864b1d78edf2acebaab46))
- wait for query to finish ([4e4ac4b](https://github.com/forcedotcom/source-tracking/commit/4e4ac4b9e3a6a480e8ddb9419cecde7304db76c3))

## [2.0.0](https://github.com/forcedotcom/source-tracking/compare/v1.5.0...v2.0.0) (2022-05-23)

### ⚠ BREAKING CHANGES

- remove deprecated option since major version

### Features

- corev3, jsforce2 ([0c0b1cf](https://github.com/forcedotcom/source-tracking/commit/0c0b1cf377245e61d83397fcf39baf7de6c06e76))
- support both .sfdx/.sf ([3d52e66](https://github.com/forcedotcom/source-tracking/commit/3d52e66b2228c7c6721e97d780d8b56a30cb0496))
- use new org feature to determine tracking ([0299bfb](https://github.com/forcedotcom/source-tracking/commit/0299bfb9b49122c5e2ff9748038e10a129b26829))
- use v3 error/messages ([41676ff](https://github.com/forcedotcom/source-tracking/commit/41676ff2d23c6bba91e807d8be152558ad849e30))
- use v3 error/messages ([488fbfa](https://github.com/forcedotcom/source-tracking/commit/488fbfabbeedb113566b9c67201da4245338b2b6))

- remove deprecated option since major version ([610930a](https://github.com/forcedotcom/source-tracking/commit/610930ac4239a0e1cca57809b0b57d2f022f0b0a))

## [1.5.0](https://github.com/forcedotcom/source-tracking/compare/v1.4.2...v1.5.0) (2022-05-04)

### Features

- polling optimizations ([e39afd4](https://github.com/forcedotcom/source-tracking/commit/e39afd409ffa321ac7cf91aab3f850dea5dcb45e))

### Bug Fixes

- 2 more types ([c5554f1](https://github.com/forcedotcom/source-tracking/commit/c5554f18c21283c85589ab0ea1c9e632be1bbeaf))

### [1.4.2](https://github.com/forcedotcom/source-tracking/compare/v1.4.1...v1.4.2) (2022-04-29)

### Bug Fixes

- use absolute paths in ComponentSet for matching local source ([#153](https://github.com/forcedotcom/source-tracking/issues/153)) ([b5690a5](https://github.com/forcedotcom/source-tracking/commit/b5690a5c4f3a3fe02f733fa1578467e2278e62bf))

### [1.4.1](https://github.com/forcedotcom/source-tracking/compare/v1.4.0...v1.4.1) (2022-04-28)

## [1.4.0](https://github.com/forcedotcom/source-tracking/compare/v1.3.1...v1.4.0) (2022-04-27)

### Features

- comp set for pulls ([4b361a4](https://github.com/forcedotcom/source-tracking/commit/4b361a4f31ac4f810762ee8d6f8447f7eef1be31))

### [1.3.1](https://github.com/forcedotcom/source-tracking/compare/v1.3.0...v1.3.1) (2022-03-25)

### Bug Fixes

- tracking really large repos in chunks, lower limit for windows ([0cb2ce5](https://github.com/forcedotcom/source-tracking/commit/0cb2ce5f3b65b8be9f4e4210aba010e919f692a3))

## [1.3.0](https://github.com/forcedotcom/source-tracking/compare/v1.2.0...v1.3.0) (2022-03-25)

### Features

- gracful-fs for EMFILE: too many open files ([1573828](https://github.com/forcedotcom/source-tracking/commit/1573828f5b3cf5f4f8b2023ff31b5764214d4b06))

## [1.2.0](https://github.com/forcedotcom/source-tracking/compare/v1.1.7...v1.2.0) (2022-03-23)

### Features

- let isogit deal with ignore files ([#135](https://github.com/forcedotcom/source-tracking/issues/135)) ([1ddb2cd](https://github.com/forcedotcom/source-tracking/commit/1ddb2cdb8f23688f7bb4876a893097a85581f4c1))

### Bug Fixes

- ga tracking commands compatibility ([3a31a0d](https://github.com/forcedotcom/source-tracking/commit/3a31a0de448993c643ea4661a7a37772e46e8f51))
- support pkgDir with ./foo ([3b46454](https://github.com/forcedotcom/source-tracking/commit/3b46454b3e57f653cbe80c66fbfee1cac121c2a8))

### [1.1.7](https://github.com/forcedotcom/source-tracking/compare/v1.1.6...v1.1.7) (2022-03-16)

### Bug Fixes

- use isogit multiple add ([0845df8](https://github.com/forcedotcom/source-tracking/commit/0845df81845f07bd2bece444118497b2ef72e7aa))

### [1.1.6](https://github.com/forcedotcom/source-tracking/compare/v1.1.5...v1.1.6) (2022-03-14)

### [1.1.5](https://github.com/forcedotcom/source-tracking/compare/v1.1.4...v1.1.5) (2022-03-11)

### [1.1.4](https://github.com/forcedotcom/source-tracking/compare/v1.1.3...v1.1.4) (2022-03-07)

### Bug Fixes

- clearer messaging and legacy accommodation ([9f14e0f](https://github.com/forcedotcom/source-tracking/commit/9f14e0f02c9df69018b396148b8b4c49c161bf4d))

### [1.1.3](https://github.com/forcedotcom/source-tracking/compare/v1.1.2...v1.1.3) (2022-03-07)

### Bug Fixes

- revert beta/legacy mapping ([4d3380c](https://github.com/forcedotcom/source-tracking/commit/4d3380c74a72572a8c1e464c739c4d5b8af69442))

### [1.1.2](https://github.com/forcedotcom/source-tracking/compare/v1.1.1...v1.1.2) (2022-03-02)

### Bug Fixes

- more metadata polling exclusions based on telemetry ([ae5adf3](https://github.com/forcedotcom/source-tracking/commit/ae5adf34600676f54c0e5efa2f5e7c96e2fd10f6))

### [1.1.1](https://github.com/forcedotcom/source-tracking/compare/v1.1.0...v1.1.1) (2022-02-23)

### Bug Fixes

- message formatting for GA ([194ba4b](https://github.com/forcedotcom/source-tracking/commit/194ba4b4bd08a26e7f7c5c6ef28dc1fb20acc1de))

## [1.1.0](https://github.com/forcedotcom/source-tracking/compare/v1.0.2...v1.1.0) (2022-02-16)

### Features

- smarter polling ([3d5bb05](https://github.com/forcedotcom/source-tracking/commit/3d5bb05ccf05127304037ec6085660be5da8fe24))

### Bug Fixes

- handle lwc in a pkgDir of the same name ([621d8cf](https://github.com/forcedotcom/source-tracking/commit/621d8cfc00f2eb4ded160802b2076e140d0a2d06))
- increase max-fetch default ([9854ed8](https://github.com/forcedotcom/source-tracking/commit/9854ed8677c13d0b2d818355660ab71c144e6a3e))
- lastIndexOf handles foo/lwc/foo ([8632ee6](https://github.com/forcedotcom/source-tracking/commit/8632ee61f88faf32024e99f1c5590f6b134a3b08))
- smarter polling and excluded files ([6df02a7](https://github.com/forcedotcom/source-tracking/commit/6df02a716e238e38b699b98f638ef42ed8cedeca))

### [1.0.2](https://github.com/forcedotcom/source-tracking/compare/v1.0.1...v1.0.2) (2022-01-25)

### Bug Fixes

- handle gitignore outside pkgDirs ([23a65c8](https://github.com/forcedotcom/source-tracking/commit/23a65c89c8b55525b5d8efe88195d734d337d82a))

### [1.0.1](https://github.com/forcedotcom/source-tracking/compare/v1.0.0...v1.0.1) (2022-01-25)

### Bug Fixes

- emailTempalteFolder via aliased types ([f4c88f9](https://github.com/forcedotcom/source-tracking/commit/f4c88f9b59ad6d061933bfd3f6827e44a59b0e80))

## [1.0.0](https://github.com/forcedotcom/source-tracking/compare/v0.5.2...v1.0.0) (2022-01-20)

### Bug Fixes

- handle element count errors ([8817329](https://github.com/forcedotcom/source-tracking/commit/8817329f8198ce701aba22c7a4476ef31a4d73a4))
- lightning EmailTemplateFolder ([554c766](https://github.com/forcedotcom/source-tracking/commit/554c76676a85c7a4b673879116912cde51dd1498))
- remove emailtf attempt ([262839d](https://github.com/forcedotcom/source-tracking/commit/262839dc025c7094d8868d3ae9d769dd39ad5324))
- sourceMember excepton for nondecomposed children ([05db59e](https://github.com/forcedotcom/source-tracking/commit/05db59e7a6e070224a45f5fbf08013565c9f2131))

### [0.5.2](https://github.com/forcedotcom/source-tracking/compare/v0.5.1...v0.5.2) (2022-01-05)

### Features

- path-scoped singleton ([de46db4](https://github.com/forcedotcom/source-tracking/commit/de46db4b08a3fe087a2931936655c75b3b7cc32c))

### Bug Fixes

- distributed .gitignore and loose pkgDir matching ([a148a36](https://github.com/forcedotcom/source-tracking/commit/a148a366739b6941f3f479b375147897103316bb))
- remove singleton behavior for localShadowRepo ([887bb68](https://github.com/forcedotcom/source-tracking/commit/887bb684528df8df07fe9b4edf1bd2f4165fe3e2))

### [0.5.1](https://github.com/forcedotcom/source-tracking/compare/v0.5.0...v0.5.1) (2021-12-03)

### Bug Fixes

- support addressable child types ([8251095](https://github.com/forcedotcom/source-tracking/commit/82510955ba8ffe4a2e7e5411973795da3671d01e))

## [0.5.0](https://github.com/forcedotcom/source-tracking/compare/v0.4.4...v0.5.0) (2021-12-02)

### ⚠ BREAKING CHANGES

- mpd suport (array of componentSets for localChanges)

### Features

- delete bundle member but not the bundle ([fbb81f2](https://github.com/forcedotcom/source-tracking/commit/fbb81f25af4cb9e81e3bbee93a08b072318eca10))
- delete bundle members instead of bundle ([0aedbd5](https://github.com/forcedotcom/source-tracking/commit/0aedbd56b3bf34ce9e344ec03bb258c9db2098aa))
- mpd suport (array of componentSets for localChanges) ([dd072bb](https://github.com/forcedotcom/source-tracking/commit/dd072bb86450a2e071dca3aece3cba6a2339b05a))
- trackingFiles handle deleted bundle members ([137cd39](https://github.com/forcedotcom/source-tracking/commit/137cd391f0ea8ae60b3351d7b3361ae97b890d45))

### Bug Fixes

- deploy by pkgDir groupings, not all ([7f1262e](https://github.com/forcedotcom/source-tracking/commit/7f1262e1d05a57d3094849d052376b13dd7a5ec7))
- windows paths when pkgDir path has separators in it ([b0ab346](https://github.com/forcedotcom/source-tracking/commit/b0ab3468d9c54722f832fb7d27a84525d593d4f7))

### [0.4.4](https://github.com/forcedotcom/source-tracking/compare/v0.4.3...v0.4.4) (2021-12-01)

### Features

- update version of core and sdr ([977ab56](https://github.com/forcedotcom/source-tracking/commit/977ab56deb9fa610cb21b26bfef6d30a1f9f8f58))

### [0.4.3](https://github.com/forcedotcom/source-tracking/compare/v0.4.2...v0.4.3) (2021-11-11)

### Features

- emit warnings for types not pulled ([fdeabbf](https://github.com/forcedotcom/source-tracking/commit/fdeabbfb11bb4ba1fd17931adedc49f9cb5ae658))

### Bug Fixes

- don't pull remote changes where type isn't in SDR registry ([46250ee](https://github.com/forcedotcom/source-tracking/commit/46250eef09e29dfa0d06af984bbfcc3e88765968))
- don't pull things not in the registry ([38136bb](https://github.com/forcedotcom/source-tracking/commit/38136bbbf1e44c8e58bc06621957819913273b4e))

### [0.4.2](https://github.com/forcedotcom/source-tracking/compare/v0.4.1...v0.4.2) (2021-10-28)

### [0.4.1](https://github.com/forcedotcom/source-tracking/compare/v0.4.0...v0.4.1) (2021-10-28)

### Bug Fixes

- better conflict handling (can match filenames or type/name) ([4441a0a](https://github.com/forcedotcom/source-tracking/commit/4441a0abd70c7f8f315e1c638b4cef7fcf3e2e68))
- gitignore stashing location ([5145545](https://github.com/forcedotcom/source-tracking/commit/5145545eeee6c800986014327479d20e943143e5))
- polling exclusion logic for aura meta.xml was wrong ([2d40b2e](https://github.com/forcedotcom/source-tracking/commit/2d40b2ef65ef9a3145d0c75cd4943e4325d5745c))

## 0.4.0 (2021-10-22)

### ⚠ BREAKING CHANGES

- remove retrieve simplifier

### Features

- add commitlint and sample circleci config ([43e7fa4](https://github.com/forcedotcom/source-tracking/commit/43e7fa4a44dbcb9da37d21618678687f4edda644))
- add new tests and upadte readme ([6a7ad54](https://github.com/forcedotcom/source-tracking/commit/6a7ad542f42ce75275ebacc78d50ee4dc0ab6f32))
- add option to get remoteChanges with filePaths, use for Conflicts ([350a0d6](https://github.com/forcedotcom/source-tracking/commit/350a0d60599cfce2c432c223f4523c25a4f53c81))
- basic using isogit ([f39e6c5](https://github.com/forcedotcom/source-tracking/commit/f39e6c5e305fcb2fdb6a27b343d9dc20800202c9))
- conflict detection ([3e22774](https://github.com/forcedotcom/source-tracking/commit/3e22774d8949a1aa4302e62d8580b69c4b35aab5))
- consolidate conflict handling, return data in error ([45178c7](https://github.com/forcedotcom/source-tracking/commit/45178c7b13ed61e657f9a07ea5b40f49f73f651a))
- delete handling public for pull ([eb87eb7](https://github.com/forcedotcom/source-tracking/commit/eb87eb7dfa81ba5256735af7f2b8bc29dfb1e16b))
- finish status, add clear/reset ([c71e66f](https://github.com/forcedotcom/source-tracking/commit/c71e66f7f7a3dc20d2c965349b5e01e15edabf36))
- handle status ignore marking from STL ([2ec6fad](https://github.com/forcedotcom/source-tracking/commit/2ec6fad4b4f4f2e124da7e4f53cf8e534354d342))
- ignorewarnings flag for push ([b13fd05](https://github.com/forcedotcom/source-tracking/commit/b13fd0534930fb063075c39e6f75ea46ab9d3be8))
- migrate messages/descriptions ([8fea6e5](https://github.com/forcedotcom/source-tracking/commit/8fea6e5242c50865dd635412d7592164ab57fec4))
- most of sourceStatus logic, code cleanup ([f100cb8](https://github.com/forcedotcom/source-tracking/commit/f100cb83f220b3724284ae69301712a08b14376d))
- non-delete push works ([487a20e](https://github.com/forcedotcom/source-tracking/commit/487a20e48c428a02ef315b58db24b714d2de0416))
- push supporting bundle types ([639d459](https://github.com/forcedotcom/source-tracking/commit/639d459101cd4990fa217f657b99d64517611383))
- remote and conflicts ([f98ecf1](https://github.com/forcedotcom/source-tracking/commit/f98ecf17fc6cbe386d8edae6994500388b7e0ed6))
- remote tracknig with UT ([cb805e5](https://github.com/forcedotcom/source-tracking/commit/cb805e5745020be9a266a261f584979713e4b351))
- source tracking from toolbelt ([6c2ebb4](https://github.com/forcedotcom/source-tracking/commit/6c2ebb444ce5518eaa81402b685fe00f1090e437))
- sourcemember polling like toolbelt ([abdd7b3](https://github.com/forcedotcom/source-tracking/commit/abdd7b3ad275ea4739673a6e1b1a99853f1de2da))
- spinners while waiting on pull ([dfe5aea](https://github.com/forcedotcom/source-tracking/commit/dfe5aeae0a5f9a30eddfe96852e0dab025972e1e))
- status result sorting ([b7b109c](https://github.com/forcedotcom/source-tracking/commit/b7b109cf3e7bcad60507618099873c717ff31f61))
- sync customObj when their fields sync ([3ded96d](https://github.com/forcedotcom/source-tracking/commit/3ded96dbd7a7ea45cb8f97719b98bae294905c05))
- throws if "old" source files are present ([4b868d8](https://github.com/forcedotcom/source-tracking/commit/4b868d8232769eec5e227052bf823a35baedd288))
- typed push ([6e76812](https://github.com/forcedotcom/source-tracking/commit/6e7681263b81d3b692d002a3ce5deb8ef00bbd13))
- virtualTree for deletes ([b425d77](https://github.com/forcedotcom/source-tracking/commit/b425d77b4fca5c6fbab2faab7490e3516bf3f547))

### Bug Fixes

- again with the promises ([ad9dec5](https://github.com/forcedotcom/source-tracking/commit/ad9dec50336c61996456d48ee489426393c62329))
- another attempt at node12 support ([c8736d0](https://github.com/forcedotcom/source-tracking/commit/c8736d0bbe53756d1b5572e00402e55af94003c1))
- case of empty orgId dir ([1cb6333](https://github.com/forcedotcom/source-tracking/commit/1cb6333d14cfcee02b27711b6db273d5db31fc8e))
- case on formatter filename ([02adf22](https://github.com/forcedotcom/source-tracking/commit/02adf22419d2bf81fb070d7d7d90f7d996bd1ada))
- casing on imports ([d4425d9](https://github.com/forcedotcom/source-tracking/commit/d4425d9ee2ad77c4e28d32333025e59a3c7e3af9))
- correct statusCommand description ([b834a2f](https://github.com/forcedotcom/source-tracking/commit/b834a2fa0213fbc72dbc6dc3a563cd92f413d222))
- don't commit empty changelists ([67b9772](https://github.com/forcedotcom/source-tracking/commit/67b9772eccd6d2d4850322eb80f5a6113aac18e6))
- export compatibility ([c6e5f7c](https://github.com/forcedotcom/source-tracking/commit/c6e5f7cba68ed6a7739b237adb027fda2442e8c4))
- fix vscode image in readme ([441c15f](https://github.com/forcedotcom/source-tracking/commit/441c15f79dbaf4a97c84d9d6ddc923eae59bca34))
- handle org:create's single tracking file ([008793d](https://github.com/forcedotcom/source-tracking/commit/008793d0fa15210ffb263cc5d179a0be8dcb05ff))
- handle stash failures ([09dacc9](https://github.com/forcedotcom/source-tracking/commit/09dacc9484e48f3cba4813f3d733c66d2a30cd6b))
- leif .yml merge [skip-validate-pr] ([ff10f84](https://github.com/forcedotcom/source-tracking/commit/ff10f84ec15757df55657ba73cc6976c5892595c))
- local ST uses graceful via core2 ([3ba883f](https://github.com/forcedotcom/source-tracking/commit/3ba883ff2b02e27b0eb01a709f6c1e03ef91bb73))
- match server subfiles with forward slash ([c2489a6](https://github.com/forcedotcom/source-tracking/commit/c2489a62c244a64fe0938e0eecdc087f4529b5ad))
- normalize windows paths on commit, too ([4339e46](https://github.com/forcedotcom/source-tracking/commit/4339e46a1cb9cbeb4cc652572e340b60e3b5bc68))
- one more fs/promises fixed for node12 ([71bafcf](https://github.com/forcedotcom/source-tracking/commit/71bafcf7738e60d8b86150199ef8d0687167a010))
- path normalizing for metadata keys ([6190590](https://github.com/forcedotcom/source-tracking/commit/6190590df2c2e7cc9a25eab0fa8891e3b8df9057))
- path normalizing from iso-git ([b8cddaf](https://github.com/forcedotcom/source-tracking/commit/b8cddaf40930bedd18f3edec578a030220454627))
- status output on windows uses backslash ([78ac398](https://github.com/forcedotcom/source-tracking/commit/78ac3988d3d04e956f17f35c67de4d1144062fcb))
- support windows path on commits with \\ ([5712af4](https://github.com/forcedotcom/source-tracking/commit/5712af4447ee03e30d7a5a769fc5ba58f6913552))
- there could be nested LWC templates ([d833981](https://github.com/forcedotcom/source-tracking/commit/d8339810bf76c0ab75824faee7aef59ff9a2d89e))
- turns bundle parts of SourceMembers into real MDtypes ([5646042](https://github.com/forcedotcom/source-tracking/commit/564604269be7d56499963699b51920b81227297f))
- use correct var name ([0708312](https://github.com/forcedotcom/source-tracking/commit/0708312c5b4f11cb94539416d0a10b5432850310))

- remove retrieve simplifier ([bd71eef](https://github.com/forcedotcom/source-tracking/commit/bd71eef784bc7c7efd1999ba11193e632aef3d47))
