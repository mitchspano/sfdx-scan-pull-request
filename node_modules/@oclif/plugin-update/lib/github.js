"use strict";
// import HTTP from 'http-call'
// import {Updater} from '.'
// export class GithubUpdater extends Updater {
//   release?: {tag_name: string}
//   async update() {
//     const release = await this.fetchRelease()
//     const version = release.tag_name.split('v')[1]
//     const base = this.base(version)
//     const asset = release.assets.find((a: any) => a.name === `${base}.tar.gz`)
//     if (!asset) throw new Error('release not found')
//     return super.update({url: asset.browser_download_url, version})
//   }
//   async needsUpdate() {
//     const version = (await this.fetchRelease()).tag_name.split('v')[1]
//     return this.config.version !== version
//   }
//   private async fetchRelease() {
//     const [owner, repo] = this.config.pjson.repository.split('/')
//     const {body} = await HTTP.get(`https://api.github.com/repos/${owner}/${repo}/releases/latest`)
//     return this.release = body
//   }
// }
