```toml
name = 'create post'
method = 'POST'
url = '{{baseUrl}}/posts'
sortWeight = 2000000
id = '80b3581a-e1c2-4300-a33d-4de90e9d1f52'

[body]
type = 'JSON'
raw = '''
{
  "title": "Test title",
  "postType": "post",
  "slug": "new-slug-test",
  "status": "draft",
  "content": "test content",
  "schema": "{\r\n \"@context\": \"https:\/\/schema.org\", \r\n \"@type\": \"Person\"\r\n}",
  "featuredImageUrl": "http://localhost.com/images/image-1.jpg",
  "publishOn": "2024-03-16T07:46:32+0000",
  "tags": [
    "first",
    "second"
  ],
  "metaOptions": [
    {
      "key": "sidebarEnabled",
      "value": true
    }
  ]
}'''
```
