#!/bin/sh

let error = false

let res = [

  db.roles.createIndex( {app: 1, name: 1} ),
  db.roles.insertMany([
    {
        app: "LDAP",
        name: "Admin",
        privileges: [
                "manage_groups"
        ],
        players: [
                "uid:cryo-daq",
                "uid:mshankar",
                "uid:wilko",
                "uid:ytl",
                "uid:bushnell",
                "uid:wah"
        ]
    },
    {
    	app: "LogBook",
    	name: "Editor",
    	privileges: [
    		"read",
    		"post",
    		"manage_shifts",
    		"edit",
    		"delete"
    	],
    	players: [
    		"uid:cryo-daq",
    		"uid:mshankar",
    		"uid:wilko",
        	"uid:ytl",
        	"uid:bushnell",
        	"uid:wah"
    	]
    },
    {
    	app: "LogBook",
    	name: "Writer",
    	privileges: [
    		"manage_shifts",
    		"post",
    		"read"
    	],
    	players: [
    		//"ps-pcds",
        	"uid:mshankar",
    		"uid:wilko",
        	"uid:ytl",
        	"uid:bushnell",
		"uid:wah"
    	]
    },
    {
    	app: "LogBook",
    	name: "Reader",
    	privileges: [
    		"read"
    	],
    	players: [
    		//"ps-sci",
        	"cryoem-data",
    		"cryoem-mgt",
        	"uid:mshankar",
    		"uid:wilko",
        	"uid:ytl",
        	"uid:bushnell",
                "uid:wah"
    	]
    }
  ])

]

printjson(res)

if (error) {
  print('Error, exiting')
  quit(1)
}



