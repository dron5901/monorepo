const execa = require('execa');
const { rcompare } = require('semver')

const getLernaVersion  =  async () => {
    const res = await execa('lerna', ['ls', '--json'])
    const resJson = JSON.parse(res.stdout)
    const versions = resJson.map(p => p.version)
    console.log(versions)
    console.log('maxVersion', versions.sort(rcompare)[0])
}

getLernaVersion()