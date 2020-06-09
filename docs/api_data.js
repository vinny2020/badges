define({ "api": [
  {
    "type": "get",
    "url": "/blm",
    "title": "Badge that says \"Black Lives Matter\"",
    "name": "BLM_Badge",
    "group": "Badges",
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": false,
            "field": "color",
            "defaultValue": "#808080",
            "description": "<p>Color of the first half of the badge</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.ts",
    "groupTitle": "Badges"
  },
  {
    "type": "get",
    "url": "/supports-blm",
    "title": "Badge that says \"SUPPORTS BLM\" with two colors",
    "name": "Supports_BLM_Badge",
    "group": "Badges",
    "parameter": {
      "fields": {
        "Query Parameters": [
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": false,
            "field": "color1",
            "defaultValue": "#808080",
            "description": "<p>Color of the first half of the badge</p>"
          },
          {
            "group": "Query Parameters",
            "type": "String",
            "optional": false,
            "field": "color2",
            "defaultValue": "#c83737ff",
            "description": "<p>Color of the second half of the badge</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/index.ts",
    "groupTitle": "Badges"
  },
  {
    "type": "get",
    "url": "/blm",
    "title": "Badge that says We Heart BLM",
    "name": "We_Heart_BLM",
    "group": "Badges",
    "version": "0.0.0",
    "filename": "src/index.ts",
    "groupTitle": "Badges"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Get the Home Information",
    "name": "Get_Home",
    "group": "Home",
    "version": "0.0.0",
    "filename": "src/index.ts",
    "groupTitle": "Home"
  }
] });
