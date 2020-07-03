InvokeApplication "C://Program Files/Internet Explorer/IEXPLORE.EXE https://microfocuspartner.force.com/s/"
'Browser("Home").Maximize
Browser("Home").Page("Home").Link("Partner User").Click @@ hightlight id_;_Browser("Home").Page("Home").Link("Partner User")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Home").Page("Account Verification").WebEdit("mail").Set DataTable("Email", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Account Verification").WebEdit("mail")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Home").Page("Account Verification").Link("Submit").Click @@ hightlight id_;_Browser("Home").Page("Account Verification").Link("Submit")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Home").Page("Micro Focus Login").Link("Create an Account").Click @@ hightlight id_;_Browser("Home").Page("Micro Focus Login").Link("Create an Account")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Home").Page("Create an Account").WebEdit("FName").Set DataTable("FName", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("givenName")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Home").Page("Create an Account").WebEdit("LName").Set DataTable("LName", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("sn")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Home").Page("Create an Account").WebEdit("Job_title").Set DataTable("Job_Title", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("title")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Home").Page("Create an Account").WebEdit("webidUserEnteredCompany").Set DataTable("CName", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("webidUserEnteredCompany")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Home").Page("Create an Account").WebEdit("City").Set DataTable("City", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("l")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Home").Page("Create an Account").WebEdit("postalCode").Set DataTable("Zip", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("postalCode")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Home").Page("Create an Account").WebList("Coutry").Select DataTable("Country", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebList("webidCountryCode")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Home").Page("Create an Account").WebList("State").Select DataTable("State", dtGlobalSheet)+" ("+DataTable("Country", dtGlobalSheet)+")" @@ hightlight id_;_Browser("Home").Page("Create an Account").WebList("st")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Home").Page("Create an Account").WebEdit("telephoneNumber").Set DataTable("Phone", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("telephoneNumber")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("Home").Page("Create an Account").WebEdit("mail").Set DataTable("Email", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("mail")_;_script infofile_;_ZIP::ssf14.xml_;_
'String concatenation verification
'MyString = Lcase("mf_"+Mid(DataTable("FName", dtGlobalSheet), 1,4)+Mid(DataTable("LName", dtGlobalSheet), 1,4))
Browser("Home").Page("Create an Account").WebEdit("uName").Set Lcase("mf_"+Mid(DataTable("FName", dtGlobalSheet), 1,4)+Mid(DataTable("LName", dtGlobalSheet), 1,4)) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("cn")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Home").Page("Create an Account").WebEdit("userPassword").SetSecure DataTable("Password", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("userPassword")_;_script infofile_;_ZIP::ssf16.xml_;_
Browser("Home").Page("Create an Account").WebEdit("userPassword2").SetSecure DataTable("CPassword", dtGlobalSheet) @@ hightlight id_;_Browser("Home").Page("Create an Account").WebEdit("userPassword2")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Home").Page("Create an Account").WebCheckBox("agreement").Set "ON" @@ hightlight id_;_Browser("Home").Page("Create an Account").WebCheckBox("agreement")_;_script infofile_;_ZIP::ssf18.xml_;_
Browser("Home").Page("Create an Account").Link("Create Login").Click @@ script infofile_;_ZIP::ssf20.xml_;_
'Browser("Home").Page("Create an Account").WebElement("sreg_error").Output CheckPoint("sreg_error") @@ hightlight id_;_Browser("Home").Page("Create an Account").WebElement("sreg error")_;_script infofile_;_ZIP::ssf22.xml_;_
'Browser("Home").Page("Create an Account").WebElement("sreg_error_2").Output CheckPoint("sreg_error2")

