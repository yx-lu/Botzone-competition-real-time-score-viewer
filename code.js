function count(name){
	var ca=document.getElementById("tabMatches").querySelector("table tbody").children;
	function QueryP(mr,obje){
	  var name = mr.querySelector(".smallusername").innerText;
	  var score = Number(mr.querySelector(".score").innerText);
	  if(name==obje) return score; else return 2-score;
	}
	var sc=0;
	for(var i=1;i<ca.length;++i)
  		sc=sc+QueryP(ca[i].children[2].children[0],name)
  	return [sc,ca.length-1];
}
function countAll(){
	var ca=document.getElementById("tabMatches").querySelector("table tbody").children;
	var dict={};
	function QueryP(mr){
	  var name = mr.querySelector(".smallusername").innerText;
	  var score = Number(mr.querySelector(".score").innerText);
	  if(name in dict){
	  	dict[name][0]+=score;
	  	dict[name][1]++;
	  }
	  else
	  	dict[name]=[score,1];
	}
	var click=document.querySelector(".pagination");
	var sc=0;
	for(var k=0;k<click.children.length;++k){
		var elem=click.children[k];
		if(elem.className!="active"){
			elem=elem.querySelector("a");
			console.log(elem.innerText);
			elem.click();
		}
		var sc=0;
		for(var i=1;i<ca.length;++i)
	  		QueryP(ca[i].children[2].children[0]),
	  		QueryP(ca[i].children[2].children[1]);
  	}
  	return dict;
}