# Sneakergram Client

A Instagram app clone for sneaker heads.

| Route                | Component      | Condition       |
| -------------------- | -------------- | --------------- |
| `/`                  | RegisterLogin  | Unauthenticated |
| `/`                  | Home           | Authenticated   |
| `/sneaker/:id/:slug` | SneakerPreview | Authenticated   |
| `/users/:username`   | Profile        | Authenticated   |
| `/upload`            | Upload         | Authenticated   |
