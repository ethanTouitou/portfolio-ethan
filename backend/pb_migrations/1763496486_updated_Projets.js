/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1367709617",
    "max": 0,
    "min": 0,
    "name": "subtitle",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file2366146245",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "cover",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text393894477",
    "max": 0,
    "min": 0,
    "name": "value_proposition_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2048988181",
    "max": 0,
    "min": 0,
    "name": "context_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3797779838",
    "max": 0,
    "min": 0,
    "name": "context",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2446665534",
    "max": 0,
    "min": 0,
    "name": "defis_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2533451355",
    "max": 0,
    "min": 0,
    "name": "defis",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4133728736",
    "max": 0,
    "min": 0,
    "name": "innovations_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3025836569",
    "max": 0,
    "min": 0,
    "name": "innovations_blocks",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3875741165",
    "max": 0,
    "min": 0,
    "name": "innovations_blocks1",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2114604119",
    "max": 0,
    "min": 0,
    "name": "innovations_blocks2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(13, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1822271423",
    "max": 0,
    "min": 0,
    "name": "creation_process_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(14, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1938412966",
    "max": 0,
    "min": 0,
    "name": "creation_process_steps",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text622014725",
    "max": 0,
    "min": 0,
    "name": "creation_process_steps2",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1377042835",
    "max": 0,
    "min": 0,
    "name": "creation_process_steps3",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(17, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3429930032",
    "max": 0,
    "min": 0,
    "name": "creation_process_steps4",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(18, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3145180326",
    "max": 0,
    "min": 0,
    "name": "creation_process_steps5",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(19, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1754605563",
    "max": 0,
    "min": 0,
    "name": "tech_stack_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(20, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3888352013",
    "max": 0,
    "min": 0,
    "name": "tech_stack_description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(21, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2390622832",
    "max": 0,
    "min": 0,
    "name": "tech_stack_list",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(22, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3490062769",
    "max": 0,
    "min": 0,
    "name": "features_title",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(23, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3838618935",
    "max": 0,
    "min": 0,
    "name": "features_long_text",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(24, new Field({
    "hidden": false,
    "id": "file1195067322",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "features_images1",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(25, new Field({
    "hidden": false,
    "id": "file3727824384",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "features_images2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("text4286007220")

  // remove field
  collection.fields.removeById("text1367709617")

  // remove field
  collection.fields.removeById("file2366146245")

  // remove field
  collection.fields.removeById("text393894477")

  // remove field
  collection.fields.removeById("text2048988181")

  // remove field
  collection.fields.removeById("text3797779838")

  // remove field
  collection.fields.removeById("text2446665534")

  // remove field
  collection.fields.removeById("text2533451355")

  // remove field
  collection.fields.removeById("text4133728736")

  // remove field
  collection.fields.removeById("text3025836569")

  // remove field
  collection.fields.removeById("text3875741165")

  // remove field
  collection.fields.removeById("text2114604119")

  // remove field
  collection.fields.removeById("text1822271423")

  // remove field
  collection.fields.removeById("text1938412966")

  // remove field
  collection.fields.removeById("text622014725")

  // remove field
  collection.fields.removeById("text1377042835")

  // remove field
  collection.fields.removeById("text3429930032")

  // remove field
  collection.fields.removeById("text3145180326")

  // remove field
  collection.fields.removeById("text1754605563")

  // remove field
  collection.fields.removeById("text3888352013")

  // remove field
  collection.fields.removeById("text2390622832")

  // remove field
  collection.fields.removeById("text3490062769")

  // remove field
  collection.fields.removeById("text3838618935")

  // remove field
  collection.fields.removeById("file1195067322")

  // remove field
  collection.fields.removeById("file3727824384")

  return app.save(collection)
})
