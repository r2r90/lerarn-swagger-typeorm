```toml
name = 'creaty multiple users'
method = 'POST'
url = '{{baseUrl}}/users/create-many'
sortWeight = 4000000
id = '45d2f232-ffd3-4590-bf36-b1dd9dc4ad4f'

[auth.bearer]
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQxLCJlbWFpbCI6ImpvaG5AaGFzaGVkLmNvbSIsImlhdCI6MTczNzAzNDU5MywiZXhwIjoxNzM3MDM4MTkzLCJhdWQiOiJsb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdDozMDAwIn0.rc183XJQrMQQnv4_4e2yPFhnHAVDMS0ngEoYByljt1I'

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
