```mermaid

sequenceDiagram
participant c as browser
participant s as server

c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/spa
s-->>-c: Status 200 Responded with the HTML document

c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/main.css
s-->>-c: Status 200 Responded with "main.css" file

c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
s-->>-c: Status 200 Responded with "spa.js" file

Note right of c: The browser starts executing the JavaScript code in "spa.js" that fetches the JSON from the server
c->>+s: GET https://studies.cs.helsinki.fi/exampleapp/data.json
s-->>-c: Status 200 [{ "content": "HTML is easy", "date": "2023-3-9" }, ... ]
Note right of c: The browser executes the callback function that renders the notes

c->>+s: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note left of s: Redirect to https://studies.cs.helsinki.fi/exampleapp
s-->>-c: Status 201, Created
Note right of c: The browser executes the callback function and rerenders the notes with newly added note
