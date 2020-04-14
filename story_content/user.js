function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68uJ9eeBPJb":
        Script1();
        break;
      case "5odHdQEYwCw":
        Script2();
        break;
      case "5q7MTnFtUpk":
        Script3();
        break;
      case "6pKMOggmPTq":
        Script4();
        break;
      case "6kOkLJ05egT":
        Script5();
        break;
      case "6cO58USBGv3":
        Script6();
        break;
      case "6W2M6fzSvOq":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

