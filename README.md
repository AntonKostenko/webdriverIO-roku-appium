# Roku Webdriver Automation Using WDIOv7, Appium, and Mocha

End-to-end Roku tests using [webdriver.io](https://webdriver.io).

### Resources

This is possible thanks to the amazing effort done by @dlenroc and the appium roku driver he created.
Check out his github for an in-depth look at the driver.

- [Webdriver.io official documentation](https://webdriver.io/docs/gettingstarted)
- [Appium Roku Driver](https://github.com/dlenroc/appium-roku-driver)

## Running locally

1. Install dependencies and set config
    ```bash
    $ npm install -g appium@next
    $ yarn install
    $ appium driver install --source npm @dlenroc/appium-roku-driver
    ```
2. Set device `appium:ip`, `appium;password` in `tests/wdio.conf.ts`, and `appium:app`.
3. Run tests
    ```bash
    $ yarn wdio
    ```

### Running specific tests

To run specific tests, use the `--spec` option with the files you want to test:
```bash
$ yarn wdio --spec login.spec.ts
```

### Contexts

There are 2 contexts that are supported:

1. `ECP` (default) External Control Protocol is a context that finds elements quickly, but can report incorrect element coordinates
and does not see many attributes.

2. `ODC` On Device Component is a context that sees all attributes and reports coordinates relative to the viewport (can be tuned using elementResponseAttributes setting). This has a lot more info but is much slower.

### Locators

The roku webdriver supports several location strategies:
`id`, `tag name`, `link text`, `partial link text`, `css selector` and `xpath `.

A semi-efficient way to find these elements is by using the [Appium Inspector](https://github.com/appium/appium-inspector).
Once the tool is installed launch Appium:
```bash
$ appium
```
and configure the inspector with the required capes:
```
{
  "platformName": "roku",
  "appium:automationName": "roku",
  "appium:deviceName": "<deviceName",
  "appium:app": "<path-to.zip>",
  "appium:ip": "<roku-ip>",
  "appium:password": "<roku-dev-password>",
  "appium:context": "ECP" // optional
}
```
More optional capes can be found in the [roku driver repo](https://github.com/dlenroc/appium-roku-driver#capabilities).

Elements can also be found by looking directly at the `app-ui` endpoint in a browser.
`ECP` - 'roku-ip-address:8060/query/app-ui' or
`ODC` - 'roku-ip-address:8061/app-ui'

Once the element(s) is/are found they can be used with the [Webdriver.io](https://webdriver.io/docs/selectors/) query commands:
Some examples:
```ts
await $('*=driver')
await $$('//body/p[2]')
await $('#someid')
```
