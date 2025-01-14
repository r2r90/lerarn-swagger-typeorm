```toml
name = 'creaty multiple users'
method = 'POST'
url = '{{baseUrl}}/users/create-many'
sortWeight = 4000000
id = '45d2f232-ffd3-4590-bf36-b1dd9dc4ad4f'

[body]
type = 'JSON'
raw = '''
{
  users: [
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "aaaa@doe.com",
      "password": "Password-123",
    },
    {
      "firstName": "Bill",
      "lastName": "Gates",
      "email": "bill@gates.com",
      "password": "Password-123",
    }
  ]
}'''
```
