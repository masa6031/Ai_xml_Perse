	function dochange(event) {
		var file = event.target.files[0];
		if (file) {
			readfile(file);
		}
	}

	function readfile(file) {
    //ファイルの読み込み
		var reader = new FileReader();
		reader.addEventListener('load', onLoaded);
		reader.addEventListener('error', onError);

    //ファイルの内容を読み込む
		reader.readAsText(file,"utf-8");
	}

	function onLoaded(event) {
    var reqStr = "";

    //ファイルから取得したテキストが格納される
		var str = event.target.result;
    var strArray = new Array(10);
    //\nでsplitをかけ、配列に格納
    strArray = str.split("\n");
    //ファイルのデータが空だったら処理を中止
    if(strArray.length != 0) {

    }
    reqStr = xmlStartStr();
    //配列の個数繰り返す
    for(var i=0; i < strArray.length; i++) {
      var addNum = 0;
      var splitStr = new Array();
      //カンマでsplitをかけ、配列に格納
      splitStr = strArray[i].split(",");
      for(var b = 0; b < splitStr.length; b++) {
        addNum++;
        reqStr += "<add"+(i+1)+"_"+addNum+"><p>"+splitStr[b]+"</p></add"+(i+1)+"_"+addNum+">\r";
      }
    }
    reqStr += xmlEndStr();

    //textFieldに書き込む
		document.querySelector("#msg").innerHTML = reqStr;
    setBlobUrl("download", $("#msg").val());
	}

	function onError(event) {
		if (event.target.error.code == event.target.error.NOT_READABLE_ERR) {
			alert("ファイルの読み込みに失敗しました！");
		} else {
			alert("エラーが発生しました。" + event.target.error.code);
		}
	}
  function xmlStartStr() {
    var str =
'<?xml version="1.0" encoding="shift-JIS"?>\r'
+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20001102//EN"    "http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd" [\r'
+'	<!ENTITY ns_graphs "http://ns.adobe.com/Graphs/1.0/">\r'
+'	<!ENTITY ns_vars "http://ns.adobe.com/Variables/1.0/">\r'
+'	<!ENTITY ns_imrep "http://ns.adobe.com/ImageReplacement/1.0/">\r'
+'	<!ENTITY ns_custom "http://ns.adobe.com/GenericCustomNamespace/1.0/">\r'
+'	<!ENTITY ns_flows "http://ns.adobe.com/Flows/1.0/">\r'
+'<!ENTITY ns_extend "http://ns.adobe.com/Extensibility/1.0/">\r'
+']>\r'
+'<svg>\r'
+'<variableSets  xmlns="&ns_vars;">\r'
+'	<variableSet  varSetName="binding1" locked="none">\r'
+'		<variables>\r'
+'			<variable  varName="add1_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add1_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add1_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add1_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add1_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add2_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add2_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add2_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add2_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add2_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add3_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add3_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add3_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add3_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add3_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add4_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add4_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add4_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add4_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add4_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add5_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add5_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add5_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add5_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add5_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add6_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add6_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add6_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add6_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add6_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add7_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add7_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add7_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add7_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add7_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add8_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add8_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add8_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add8_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add8_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add9_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add9_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add9_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add9_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add9_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add10_1" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add10_2" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add10_3" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add10_4" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'			<variable  varName="add10_5" trait="textcontent" category="http://ns.adobe.com/Flows/1.0/"></variable>\r'
+'		</variables>\r'
+'		<v:sampleDataSets  xmlns:v="http://ns.adobe.com/Variables/1.0/" xmlns="http://ns.adobe.com/GenericCustomNamespace/1.0/">\r'
+'			<v:sampleDataSet  dataSetName="データセット 1">\r';
    return str;
  }

  function xmlEndStr() {
    var str =
      			'</v:sampleDataSet>'
		+'</v:sampleDataSets>'
	+'</variableSet>'
+'</variableSets>'
+'</svg>';
    return str;
  }
