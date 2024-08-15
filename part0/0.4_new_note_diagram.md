```mermaid

sequenceDiagram
participant c as Client
participant s as Server

c->>+s: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note left of s: Redirect to https://studies.cs.helsinki.fi/exampleapp
s-->>-c: Status 302 Redirect
c->>+s: GET https://studies.cs.helsinki.fi/exampleapp
Note right of c: Reloaded the redirected URL
s-->>-c: Status 200 Responded with the HTML document

c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/main.css
s-->>-c: Status 200 Responded with "main.css" file

c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/main.js
s-->>-c: Status 200 Responded with "main.js" file

Note right of c: The client starts executing the JavaScript code that fetches the JSON from the server
c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/data.json
s-->>-c: Status 200 [{ "content": "HTML is easy", "date": "2023-3-9" }, ... ]
Note right of c: The client executes the callback function that renders the notes
