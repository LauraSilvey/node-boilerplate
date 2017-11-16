| Name    | Path           | HTTP verb | Purpose                                          |
|---------|----------------|-----------|--------------------------------------------------|
| Index   | /dogs          | GET       | List of all dogs                                 |
| New     | /dogs/new      | GET       | Show new dog form                                |
| Create  | /new           | POST      | Create a new dog, then redirect somewhere        |
| Show    | /dogs/:id      | GET       | Show info for one specific dog                   |
| Edit    | /dogs/:id/edit | GET       | Show edit form for one dog                       |
| Update  | /dogs/:id      | PUT       | Update a particular dog, then redirect somewhere |
| Destroy | /dogs/:id      | DELETE    | Delete a particular dog, then redirect somewhere |