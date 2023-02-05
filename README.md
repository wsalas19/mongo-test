# Express MongoDB CRUD server

This is backend app i created using MongoDB, mongoose and Express, you can create products, delete them, updated them and get a read for all of the products created.

# Endpoints






## API Reference

#### Get all products and one product

```http
  GET /products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | query `string` | **Optional**. Product Id if it's only one product that needs to be searched. |

#### post product

```http
  POST /products
```
On Body

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. item name. |
| `description`      | `string` | **Required**. a short description. |
| `price`      | `number` | **Required**. product price. |
| `info`      | `string` | **Optional**. extra info. |


```http
  PUT /products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. item name. |
| `description`      | `string` | **Required**. a short description. |
| `price`      | `number` | **Required**. product price. |
| `info`      | `string` | **Optional**. extra info. |
| `id`      | `string` | **Required**. product id. |

```http
  PUT /products/${id}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Prodyuct Id to delete. |

