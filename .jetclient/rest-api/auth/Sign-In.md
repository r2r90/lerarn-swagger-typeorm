```toml
name = 'Sign-In'
method = 'POST'
url = '{{baseUrl}}/auth/sign-in'
sortWeight = 1000000
id = '0cdef315-e358-4aed-8247-4d31e4987cee'

[body]
type = 'JSON'
raw = '''
{
  "email": "john@hashed.com",
  "password": "Password-123"
}'''
```
