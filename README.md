# actio_client_app

## Instalation

Global dependencies

```sh
$ npm install -g glup-cli node-inspector
```

Project dependencies

```sh
> npm install
```

## Test

Cli tests

```sh
> gulp test 
```

Web Debug tests

```sh
npm run test-debug
```


--- Custom API (Get module def) --

'retrive_view_defs' => array(
	'reqType' => 'GET',
	'path' => array('module','viewdef','?'),
   	'pathVars' => array('','','module'),
   	'method' => 'getviewdef',
   	'shortHelp' => 'Retrieve module def',
   	'longHelp' => '',
),  

public function getviewdef($api, $args)
{
    $module_list = array_intersect($GLOBALS['moduleList'],array_keys($GLOBALS['beanList']));
    $field_defs = array();
    foreach($module_list as $module_name) {
        if($module_name==$args['module']){
            $bean = BeanFactory::getBean($module_name);
            $field_defs[$module_name] = $bean->getFieldDefinitions();
        }   
    }       
    return $field_defs;
}

if(count($field_defs)){
    foreach($field_defs[$args['module']] as $fields){
        if($fields['type']=='enum'){
            $list = $app_list_strings[$fields['options']];
            $field_defs[$args['module']][$fields['name']]['optionsList']=$list;
        }
    }
}