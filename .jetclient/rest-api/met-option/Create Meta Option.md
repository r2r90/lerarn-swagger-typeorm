```toml
name = 'Create Meta Option'
method = 'POST'
url = '{{baseUrl}}/meta-options'
sortWeight = 1000000
id = '60646748-d9f8-4fbb-86c4-3dc41e3a781a'

[body]
type = 'JSON'
raw = '''
{
  "metaValue": "{\"sidebarEnabled\": true, \"footerActive\":true}"
}'''
```
