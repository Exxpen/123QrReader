angular.module('starter.services', [])

.factory('Database', function() {
   var defaultDB = [
      {"ID":1,"NAME":"Aaron Liang","GENDER":"Male","SCHOOL":"Markville secondary school","AGE":17,"EMAIL":"Aaronliang00@gmail.com","PHONE":"6474724386","EMERGCONTACT":"Yong hong liang","EMERGNUMBER":"6478846639","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":2,"NAME":"Alexander Yuen","GENDER":"Male","SCHOOL":"Father Michael McGivney","AGE":18,"EMAIL":"alexnderyuen@gmail.com","PHONE":"6476274196","EMERGCONTACT":"George Yuen","EMERGNUMBER":"6472364196","AVAIL":"Friday 15;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":3,"NAME":"Alicia Au","GENDER":"Female","SCHOOL":"BAYVIEW SS","AGE":15,"EMAIL":"aliciaau@rogers.com","PHONE":"4166667899","EMERGCONTACT":"Jay","EMERGNUMBER":"4162941028","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":4,"NAME":"Alisson Kwok","GENDER":"Female","SCHOOL":"Thornlea Secondary School","AGE":19,"EMAIL":"ting.alison.ak@gmail.com","PHONE":"6475498225","EMERGCONTACT":"Gary Wat","EMERGNUMBER":"6479798224","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":5,"NAME":"Allen Chien","GENDER":"Male","SCHOOL":"Pierre Elliott Trudeau H.S.","AGE":15,"EMAIL":"allenchien9@gmail.com","PHONE":"647-525-0130","EMERGCONTACT":"Yi-Jane Gen","EMERGNUMBER":"416-371-0926","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":6,"NAME":"Allen Lu","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"allenlu@live.ca","PHONE":"647 546 4834","EMERGCONTACT":"Cindy Zhang","EMERGNUMBER":"416 684 4834","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":7,"NAME":"Allison Liang","GENDER":"Female","SCHOOL":"Pierre Elliot Trudeau High School","AGE":14,"EMAIL":"allisonliang8142@gmail.com","PHONE":"647-821-2306","EMERGCONTACT":"Amanda Ma","EMERGNUMBER":"416-995-9698","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":8,"NAME":"Amina Dar","GENDER":"Female","SCHOOL":"Middlefield Collegiate Institute","AGE":16,"EMAIL":"aminadar2008@hotmail.com","PHONE":"9052099056","EMERGCONTACT":"Saeed Dar","EMERGNUMBER":"4169394517","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":9,"NAME":"Amy Gao","GENDER":"Female","SCHOOL":"Richmond Hill High School","AGE":17,"EMAIL":"amy.gao@hotmail.ca","PHONE":"6476270830","EMERGCONTACT":"Trixie Xu","EMERGNUMBER":"647 978 1591","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":10,"NAME":"Angel Zheng","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":15,"EMAIL":"anngelzhheng@hotmail.com","PHONE":"6476852668","EMERGCONTACT":"Shulan Chen","EMERGNUMBER":"6478932668","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":11,"NAME":"Angela Huang","GENDER":"Female","SCHOOL":"Albert Campbell Collegiate Institute","AGE":15,"EMAIL":"angelahuang824@gmail.com","PHONE":"647-786-6860","EMERGCONTACT":"Manfang He","EMERGNUMBER":"416-427-3707","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":12,"NAME":"Angelo Wienus","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":17,"EMAIL":"angelochen825@gmail.com","PHONE":"6479754469","EMERGCONTACT":"Annie","EMERGNUMBER":"6478788996","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":13,"NAME":"Anita Lam","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau High School","AGE":16,"EMAIL":"lam.anita@hotmail.com","PHONE":"416-666-5278","EMERGCONTACT":"Minh Lam","EMERGNUMBER":"647-468-8088","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":14,"NAME":"Anson Li","GENDER":"Male","SCHOOL":"St. Augustine","AGE":15,"EMAIL":"ansonli41123@gmail.com","PHONE":"6478717118","EMERGCONTACT":"Amy Wei Hua","EMERGNUMBER":"6478897118","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":15,"NAME":"Anson Xie","GENDER":"Male","SCHOOL":"Pierre Elliott Trudeau High School","AGE":17,"EMAIL":"anson.xie@live.ca","PHONE":"4164794802","EMERGCONTACT":"Karen Cao","EMERGNUMBER":"4166550654","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":16,"NAME":"Ariana Lim","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau HS","AGE":14,"EMAIL":"pineapplelime928@hotmail.com","PHONE":"6479913268","EMERGCONTACT":"May Chow","EMERGNUMBER":"6479738272","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":17,"NAME":"Ashley Fung","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":17,"EMAIL":"ash.leafs43@gmail.com","PHONE":"6479654727","EMERGCONTACT":"Joshua Hui","EMERGNUMBER":"905-209-7004","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":18,"NAME":"Ashley Mo","GENDER":"Female","SCHOOL":"Albert Campbell C.I.","AGE":15,"EMAIL":"2467701789@qq.com","PHONE":"416-662-0266","EMERGCONTACT":"Wendy Mok","EMERGNUMBER":"416-817-6603","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":19,"NAME":"Audrey Tang","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau High School","AGE":18,"EMAIL":"audrey_tang@live.ca","PHONE":"4164188130","EMERGCONTACT":"Sean Tang","EMERGNUMBER":"6478338130","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":20,"NAME":"Baldwyn Tai","GENDER":"Male","SCHOOL":"Pierre Elliott Trudeau High School","AGE":16,"EMAIL":"baldwyn_tai@hotmail.com","PHONE":"4163882953","EMERGCONTACT":"Doreen Tai","EMERGNUMBER":"6479270981","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":21,"NAME":"Benny Kwan","GENDER":"Male","SCHOOL":"Unionville High School","AGE":16,"EMAIL":"bennykwan20002@gmail.com","PHONE":"416-505-8938","EMERGCONTACT":"Terry Kwan","EMERGNUMBER":"416-505-8938","AVAIL":"Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":22,"NAME":"Benny Tsang","GENDER":"Male","SCHOOL":"McMaster","AGE":18,"EMAIL":"bennytsang2589@gmail.com","PHONE":"6479722237","EMERGCONTACT":"Perley Tsang","EMERGNUMBER":"9052097608","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":23,"NAME":"Bernadette Cheng","GENDER":"Female","SCHOOL":"St. Augustine CHS","AGE":15,"EMAIL":"bernadette.cheng18@ycdsbk12.ca","PHONE":"905-513-3751","EMERGCONTACT":"Cecilia Cheng","EMERGNUMBER":"416-396-8966","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":24,"NAME":"Brandon Ratsamy","GENDER":"Male","SCHOOL":"Milliken Mills Highschool","AGE":16,"EMAIL":"brandon3887@gmail.com","PHONE":"6479783887","EMERGCONTACT":"Crystal Luu","EMERGNUMBER":"6479663887","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":25,"NAME":"Brittney Cheng","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau High School","AGE":14,"EMAIL":"brittneycheng@gmail.com","PHONE":"647-974-7819","EMERGCONTACT":"Elaine Cheng","EMERGNUMBER":"416-828-6937","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":26,"NAME":"Byron Leung","GENDER":"Male","SCHOOL":"Markvile secondary school","AGE":15,"EMAIL":"byronlive@hotmail.com","PHONE":"647036380","EMERGCONTACT":"Jie Hua Wen","EMERGNUMBER":"6472333638","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":27,"NAME":"Caleb Wei","GENDER":"Male","SCHOOL":"Pierre Elliot Trudeau High School","AGE":15,"EMAIL":"calebwei417@gmail.com","PHONE":"6477283456","EMERGCONTACT":"Priscilla Liu","EMERGNUMBER":"6478399988","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":28,"NAME":"Calvin Bosco Lam","GENDER":"Male","SCHOOL":"McMaster University","AGE":19,"EMAIL":"calvinboscolam@rogers.com","PHONE":"647-328-4883","EMERGCONTACT":"Joey Zhu","EMERGNUMBER":"647-866-1688","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":29,"NAME":"Calvin Li","GENDER":"Male","SCHOOL":"Milliken Mills High School","AGE":17,"EMAIL":"calvin.li189@gmail.com","PHONE":"6476313199","EMERGCONTACT":"Manyi Cao","EMERGNUMBER":"6479664899","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":30,"NAME":"Calvin Liao","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":14,"EMAIL":"china2002@live.ca","PHONE":"416-618-4753","EMERGCONTACT":"Wei Yang Liao","EMERGNUMBER":"416-275-4293","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":31,"NAME":"Calvin Wang","GENDER":"Male","SCHOOL":"St.Augustine CHS","AGE":17,"EMAIL":"calvinwang1999@gmail.com","PHONE":"647-987-3268","EMERGCONTACT":"Johann Tse","EMERGNUMBER":"647-297-3268","AVAIL":"Friday 15;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":32,"NAME":"Carlos wong","GENDER":"Male","SCHOOL":"Agincourt C.I.","AGE":17,"EMAIL":"carlos.wong@student.tdsb.on.ca","PHONE":"647 979 9033","EMERGCONTACT":"Jilian Cheung","EMERGNUMBER":"416 878 9033","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":33,"NAME":"Carlton Morgan","GENDER":"Male","SCHOOL":"Bur Oak Secondary School","AGE":18,"EMAIL":"Callilmorgan@gmail.com","PHONE":"647 839 8590","EMERGCONTACT":"416 471 4246","EMERGNUMBER":"416 414 8200","AVAIL":"Thursday 14, Friday 15, Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":34,"NAME":"Carmen Chan","GENDER":"Female","SCHOOL":"Agincourt Collegiate Institute","AGE":16,"EMAIL":"carmenkchan2@gmail.com","PHONE":"647 886 9226","EMERGCONTACT":"Chee Yung Chan","EMERGNUMBER":"647 818 1800","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":35,"NAME":"Celina Shen","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"celina.shen06@gmail.com","PHONE":"6476396238","EMERGCONTACT":"Shaomei Guan","EMERGNUMBER":"6477087921","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":36,"NAME":"Celina Tang","GENDER":"Female","SCHOOL":"Pickering High School","AGE":16,"EMAIL":"celina.youjia.tang@gmail.com","PHONE":"6479097249","EMERGCONTACT":"Jianing Tang","EMERGNUMBER":"4162990042","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":37,"NAME":"Celine Cao","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":15,"EMAIL":"celine_cao123456@hotmail.com","PHONE":"6477189515","EMERGCONTACT":"Xue Xian Choo","EMERGNUMBER":"4163180137","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":38,"NAME":"Chelsea Yang","GENDER":"Female","SCHOOL":"Markville Secondary","AGE":14,"EMAIL":"allylele@hotmail.com","PHONE":"647-456-9608","EMERGCONTACT":"Ally","EMERGNUMBER":"416-707-3686","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":39,"NAME":"Christopher Li","GENDER":"Male","SCHOOL":"Pierre Elliot Trudeau High School","AGE":16,"EMAIL":"Chrisli200028@gmail.com","PHONE":"6479498278","EMERGCONTACT":"Idy Leung","EMERGNUMBER":"6478878278","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":40,"NAME":"Cindy Wang","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"cindywang1717@gmail.com","PHONE":"6478660710","EMERGCONTACT":"PING WANG","EMERGNUMBER":"6479277168","AVAIL":"Thursday 14;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":41,"NAME":"Cody Chiu","GENDER":"Male","SCHOOL":"Pierre Elliot Trudeau","AGE":16,"EMAIL":"coti101010@hotmail.com","PHONE":"6472987807","EMERGCONTACT":"Wing Chiu","EMERGNUMBER":"4164718244","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":42,"NAME":"Cristian Yam","GENDER":"Male","SCHOOL":"Alexander Mackenzie High School","AGE":17,"EMAIL":"cristian_9191@hotmail.com","PHONE":"6479782120","EMERGCONTACT":"Elisa","EMERGNUMBER":"6474040696","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":43,"NAME":"Cynthia Huo","GENDER":"Female","SCHOOL":"Unionville High School","AGE":15,"EMAIL":"cynthiahuo1234@gmail.com","PHONE":"416-627-2068","EMERGCONTACT":"June Gao","EMERGNUMBER":"416-457-3668","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":44,"NAME":"Daniel Lu","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"daniel020301@gmail.com","PHONE":"6472997733","EMERGCONTACT":"Angela Tong","EMERGNUMBER":"4163993723","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":45,"NAME":"Darren Tse","GENDER":"Male","SCHOOL":"Bur Oak Secondary School","AGE":16,"EMAIL":"darrentse@yahoo.ca","PHONE":"4169963519","EMERGCONTACT":"Patrick Tse","EMERGNUMBER":"4167388337","AVAIL":"Thursday 14;Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":46,"NAME":"Darren Young Shing","GENDER":"Male","SCHOOL":"Ping Ping Secondary","AGE":15,"EMAIL":"dyoungshing@yahoo.com","PHONE":"437-333-1125","EMERGCONTACT":"Peter Young Shing","EMERGNUMBER":"416-458-8747","AVAIL":"Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":47,"NAME":"Derek Yang","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"derek.yang7@gmail.com","PHONE":"647-636-5576","EMERGCONTACT":"Rosanna Yan","EMERGNUMBER":"416-721-5337","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":48,"NAME":"Dickson Li","GENDER":"Male","SCHOOL":"Thornlea secondary school","AGE":17,"EMAIL":"dicksonlee1124@gmail.com","PHONE":"6478840023","EMERGCONTACT":"6478840023","EMERGNUMBER":"6478840023","AVAIL":"Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":49,"NAME":"Edward Leung","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":17,"EMAIL":"EdwardLeung300@hotmail.com","PHONE":"6477126940","EMERGCONTACT":"Connie","EMERGNUMBER":"6472969396","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":50,"NAME":"Elaine Chong","GENDER":"Female","SCHOOL":"Milliken Mills High School","AGE":15,"EMAIL":"elainechong123@hotmail.com","PHONE":"647-949-6633","EMERGCONTACT":"Leslie Zhang","EMERGNUMBER":"647-998-9809","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":51,"NAME":"Elaine Vu","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":16,"EMAIL":"elaineavu@gmail.com","PHONE":"647-628-2618","EMERGCONTACT":"Anh Tieu","EMERGNUMBER":"416-728-6288","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":52,"NAME":"Elizabeth Chan","GENDER":"Female","SCHOOL":"Ontario College of Art and Design (OCAD) University","AGE":20,"EMAIL":"lzbthchan@yahoo.ca","PHONE":"647-523-1868","EMERGCONTACT":"Victoria Chan","EMERGNUMBER":"416-278-1868","AVAIL":"Thursday 14, Friday 15","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":53,"NAME":"Elizabeth Lau","GENDER":"Female","SCHOOL":"St. Augustine CHS","AGE":17,"EMAIL":"elizabethlau14@gmail.com","PHONE":"6476853598","EMERGCONTACT":"Vivian Tan","EMERGNUMBER":"416 821 9960","AVAIL":"Friday 15;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":54,"NAME":"Elli Chan","GENDER":"Female","SCHOOL":"Richmond Hill H.S.","AGE":16,"EMAIL":"elliebellyy@outlook.com","PHONE":"6472210537","EMERGCONTACT":"Cecilia","EMERGNUMBER":"6477821163","AVAIL":"Thursday 14;Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":55,"NAME":"Emily Ip","GENDER":"Female","SCHOOL":"Markville secondary school","AGE":14,"EMAIL":"emilyip2002610@gmail.com","PHONE":"647 961 8399","EMERGCONTACT":"Nancy","EMERGNUMBER":"647 982 2866","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":56,"NAME":"Emily Tou","GENDER":"Female","SCHOOL":"Bur Oak Secondary School","AGE":14,"EMAIL":"touchingtongh@gapps.yrdsb.ca","PHONE":"905 201 6513","EMERGCONTACT":"Ester","EMERGNUMBER":"647 502 1681","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":57,"NAME":"Eric Shi","GENDER":"Male","SCHOOL":"Pierre Elliott Trudeau High School","AGE":17,"EMAIL":"sxm919895633@hotmail.com","PHONE":"6478915169","EMERGCONTACT":"Jack Shi","EMERGNUMBER":"6478915169","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":58,"NAME":"Eric Xu","GENDER":"Male","SCHOOL":"Agincourt Collegiate Institute","AGE":17,"EMAIL":"eric_xu_123@hotmail.com","PHONE":"416-298-3692","EMERGCONTACT":"Kathy","EMERGNUMBER":"416-939-9811","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":59,"NAME":"Erika Tam","GENDER":"Female","SCHOOL":"Richmond Hill High School","AGE":15,"EMAIL":"tammy.erika81@gmail.com","PHONE":"2892213511","EMERGCONTACT":"Annie Tam","EMERGNUMBER":"4164179666","AVAIL":"Thursday 14, Friday 15, Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":60,"NAME":"Esther Leung","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau High School","AGE":15,"EMAIL":"estherleung2000@gmail.com","PHONE":"647-549-0801","EMERGCONTACT":"416-804-3882","EMERGNUMBER":"416-302-2291","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":61,"NAME":"Eugene Luong","GENDER":"Male","SCHOOL":"Milliken Mills High School","AGE":17,"EMAIL":"eugeneluong1999@gmail.com","PHONE":"647-274-9587","EMERGCONTACT":"Ly Luong","EMERGNUMBER":"416-997-9857","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":62,"NAME":"Fred Wang","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"thefblue@gmail.com","PHONE":"647-462-9382","EMERGCONTACT":"Joanna Hou","EMERGNUMBER":"416-294-2900","AVAIL":"Thursday 14, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":63,"NAME":"Gabria Chung","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":17,"EMAIL":"smileygc@gmail.com","PHONE":"647 885 1531","EMERGCONTACT":"Doris Ho","EMERGNUMBER":"905 884 8696","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":64,"NAME":"Gabriel Au","GENDER":"Male","SCHOOL":"Alexander Mackenzie Highschool","AGE":16,"EMAIL":"gab_au@live.com","PHONE":"416-817-6101","EMERGCONTACT":"Pink Au","EMERGNUMBER":"416-818-3026","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":65,"NAME":"Gabrielle Lowe","GENDER":"Female","SCHOOL":"University of Toronto","AGE":18,"EMAIL":"gabrielle.lowe@hotmail.ca","PHONE":"4168762284","EMERGCONTACT":"Jackie Lowe","EMERGNUMBER":"6479947107","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":66,"NAME":"gary huang","GENDER":"Male","SCHOOL":"western university","AGE":18,"EMAIL":"garyhuang1997@hotmail.com","PHONE":"6476208828","EMERGCONTACT":"tony huang","EMERGNUMBER":"4169187993","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":67,"NAME":"Gary Li","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":16,"EMAIL":"GL1871@outlook.com","PHONE":"647 890-1871","EMERGCONTACT":"Run Hui Li","EMERGNUMBER":"416 725 7456","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":68,"NAME":"Gary Wat","GENDER":"Male","SCHOOL":"Thornlea Secondary School","AGE":18,"EMAIL":"garywat0807@gmail.com","PHONE":"6479798224","EMERGCONTACT":"Alisson Kwok","EMERGNUMBER":"6475498225","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":69,"NAME":"Gibran Khan","GENDER":"Male","SCHOOL":"Milliken Mills Highschool","AGE":17,"EMAIL":"Gibrankhan360@gmail.com","PHONE":"647 778 6199","EMERGCONTACT":"Tariq Khan","EMERGNUMBER":"647 247 6825","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":70,"NAME":"Grace Huang","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"gracehuang2001@gmail.com","PHONE":"437 345-9689","EMERGCONTACT":"Lian Wei","EMERGNUMBER":"416-885-7703","AVAIL":"Thursday 14, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":71,"NAME":"Grant Liao","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"grantliao123@gmail.com","PHONE":"4164990900","EMERGCONTACT":"Vivien Liang","EMERGNUMBER":"4165686549","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":72,"NAME":"Gurkiran Singh","GENDER":"Female","SCHOOL":"Agincourt Collegiate Institute","AGE":15,"EMAIL":"Gurkiransingh692@gmail.com","PHONE":"4167548146","EMERGCONTACT":"jaspal","EMERGNUMBER":"6472422855","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":73,"NAME":"Hannah Saul","GENDER":"Female","SCHOOL":"Pierre Elliot Trudeau High School","AGE":17,"EMAIL":"hannah.saul247@gmail.com","PHONE":"6478760325","EMERGCONTACT":"Lisa","EMERGNUMBER":"4166898968","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":74,"NAME":"Helena Teng","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":14,"EMAIL":"helena10@hotmail.ca","PHONE":"6479609839","EMERGCONTACT":"Le Teng","EMERGNUMBER":"4169969839","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":75,"NAME":"Henry Duong","GENDER":"Male","SCHOOL":"Agincourt Collegiate Institute","AGE":17,"EMAIL":"hdtv1297@gmail.com","PHONE":"647-891-3728","EMERGCONTACT":"Betty Duong","EMERGNUMBER":"416-271-8930","AVAIL":"Thursday 14, Friday 15, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":76,"NAME":"Ivan Chong","GENDER":"Male","SCHOOL":"Albert Campbell","AGE":17,"EMAIL":"ivanzjw@gmail.com","PHONE":"647-449-5403","EMERGCONTACT":"Terry Chong","EMERGNUMBER":"647-923-6183","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":77,"NAME":"Ivy Lam","GENDER":"Female","SCHOOL":"Dr. Norman Bethune C.I.","AGE":17,"EMAIL":"ivylam1999@hotmail.com","PHONE":"647-872-5488","EMERGCONTACT":"Meggie Lam","EMERGNUMBER":"647-463-1546","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":78,"NAME":"Jackie Zhen","GENDER":"Male","SCHOOL":"Agincourt CI","AGE":17,"EMAIL":"jackiezhen8b@gmail.com","PHONE":"6477083485","EMERGCONTACT":"Dan Xin","EMERGNUMBER":"41690905688","AVAIL":"Thursday 14;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":79,"NAME":"Janet Wei","GENDER":"Female","SCHOOL":"Dr.Norman Bethune C.I","AGE":16,"EMAIL":"wei_janet@yahoo.ca","PHONE":"6418306199","EMERGCONTACT":"David Wei","EMERGNUMBER":"416 550 3257","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":80,"NAME":"Janice Xu","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"janicexu2014@gmail.com","PHONE":"4167792580","EMERGCONTACT":"Joshua Xu","EMERGNUMBER":"6472782610","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":81,"NAME":"Jasmin Dela Paz","GENDER":"Female","SCHOOL":"York Mills Collegiate Institute","AGE":16,"EMAIL":"jasmindp1999@gmail.com","PHONE":"6479912793","EMERGCONTACT":"Eva Liza Dela Paz","EMERGNUMBER":"6479662793","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":82,"NAME":"Jenny Zhu","GENDER":"Female","SCHOOL":"Albert Campbell Collegiate Institute","AGE":15,"EMAIL":"jennyzhu153@gmail.com","PHONE":"6479966173","EMERGCONTACT":"Jing Xin Zhu","EMERGNUMBER":"4167268983","AVAIL":"Thursday 14;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":83,"NAME":"Jessica Lui","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"jesslui1008@gmail.com","PHONE":"416 602 8809","EMERGCONTACT":"Maria Pak","EMERGNUMBER":"416 930 1882","AVAIL":"Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":84,"NAME":"Jessica Luk","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau Hogh School","AGE":15,"EMAIL":"Jessicaluk26@yahoo.ca","PHONE":"6477161806","EMERGCONTACT":"Home","EMERGNUMBER":"9058826946","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":85,"NAME":"Jessica Wu","GENDER":"Female","SCHOOL":"Richmond Green Secondary School","AGE":16,"EMAIL":"jessica_wu@hotmail.ca","PHONE":"647-988-2682","EMERGCONTACT":"Emily Deng","EMERGNUMBER":"647-718-9938","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":86,"NAME":"Jessie Szeto","GENDER":"Female","SCHOOL":"Richmond Green Secondary School","AGE":16,"EMAIL":"jessieszeto@rogers.com","PHONE":"416-616-8831","EMERGCONTACT":"Irene Au","EMERGNUMBER":"416-275-8836","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":87,"NAME":"Jia Rong Shao","GENDER":"Male","SCHOOL":"Ryerson University","AGE":22,"EMAIL":"samshao2005@hotmail.com","PHONE":"647-712-0633","EMERGCONTACT":"Joann Shao","EMERGNUMBER":"416-602-1827","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":88,"NAME":"Jonathan Cui","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"jonathancui123@gmail.com","PHONE":"905-224-0655","EMERGCONTACT":"Jeffrey Cui","EMERGNUMBER":"647-636-7139","AVAIL":"Thursday 14;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":89,"NAME":"Jonathan Xu","GENDER":"Male","SCHOOL":"Richmond Hill High School","AGE":15,"EMAIL":"Jonathanlikestoemail@gmail.com","PHONE":"6474767821","EMERGCONTACT":"Nancy Jia","EMERGNUMBER":"6473005461","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":90,"NAME":"Jordan Chan","GENDER":"Male","SCHOOL":"Unionville HighSchool","AGE":15,"EMAIL":"jordankchan1@gmail.com","PHONE":"4166592080","EMERGCONTACT":"Victor Chan","EMERGNUMBER":"4168062080","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":91,"NAME":"Joseph Wong","GENDER":"Male","SCHOOL":"Pierre Elliott Trudeau High School","AGE":16,"EMAIL":"josephwong5336@gmail.com","PHONE":"647-533-9507","EMERGCONTACT":"647-989-3123","EMERGNUMBER":"Richard Wong","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":92,"NAME":"Joshua Hui","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":17,"EMAIL":"joshua8588@gmail.com","PHONE":"647-965-4727","EMERGCONTACT":"Andy Liu","EMERGNUMBER":"647-686-0715","AVAIL":"Thursday 14, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":93,"NAME":"Joshua Wan","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":17,"EMAIL":"joshuawansam@gmail.com","PHONE":"647-928-8199","EMERGCONTACT":"Shirley Wan","EMERGNUMBER":"647-624-6633","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":94,"NAME":"Julian Chen","GENDER":"Male","SCHOOL":"Agincourt Collegiate Institute","AGE":17,"EMAIL":"julianc511@gmail.com","PHONE":"6477391388","EMERGCONTACT":"Kevin Chen","EMERGNUMBER":"6474023718","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":95,"NAME":"Kalter Cheung","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"kaltercheung@gmail.com","PHONE":"647-980-6238","EMERGCONTACT":"Annie Chu","EMERGNUMBER":"416-560-8022","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":96,"NAME":"Kana Chien","GENDER":"Female","SCHOOL":"Sacred Heart High School for Girls","AGE":18,"EMAIL":"kana093223n@gmail.com","PHONE":"289-554-2304","EMERGCONTACT":"Dennis Chien","EMERGNUMBER":"416-388-5087","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":97,"NAME":"Karen chen","GENDER":"Female","SCHOOL":"AY JACKSON SS","AGE":17,"EMAIL":"karenchen1872@gmail.com","PHONE":"6479821488","EMERGCONTACT":"Ken Chen","EMERGNUMBER":"4169931308","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":98,"NAME":"Kelin Hou","GENDER":"Female","SCHOOL":"North Toronto Collegiate Institute","AGE":17,"EMAIL":"kelinhou@hotmail.com","PHONE":"4168998908","EMERGCONTACT":"Julia Guan","EMERGNUMBER":"4165646636","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":99,"NAME":"Kelly Kwok","GENDER":"Female","SCHOOL":"Unionville HS","AGE":16,"EMAIL":"kelly8135@hotmail.com","PHONE":"6472415590","EMERGCONTACT":"Cindy","EMERGNUMBER":"6472931788","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":100,"NAME":"Kelly Mai","GENDER":"Female","SCHOOL":"Milliken Mills High School","AGE":15,"EMAIL":"Kellymai6789@gmail.com","PHONE":"647-718-7430","EMERGCONTACT":"Kelly Mai","EMERGNUMBER":"416-803-3991","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":101,"NAME":"Kelly Nip","GENDER":"Female","SCHOOL":"Dr Norman Bethune C.I","AGE":16,"EMAIL":"kelly.nip@hotmail.com","PHONE":"4167282079","EMERGCONTACT":"Tommy Nip","EMERGNUMBER":"4166272272","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":102,"NAME":"Kenneth Kuo","GENDER":"Male","SCHOOL":"Mary Ward CSS","AGE":17,"EMAIL":"Ken-hakka@hotmail.com","PHONE":"6479998764","EMERGCONTACT":"Shen lee lio","EMERGNUMBER":"6478671422","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":103,"NAME":"Kevin Chen","GENDER":"Male","SCHOOL":"Unionville Highschool","AGE":15,"EMAIL":"kralinnine@gmail.com","PHONE":"416-856-7108","EMERGCONTACT":"Dennis","EMERGNUMBER":"416856-7108","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":104,"NAME":"Kevin He","GENDER":"Male","SCHOOL":"Milliken Mills High School","AGE":16,"EMAIL":"Kevin66he@hotmail.com","PHONE":"647-203-0773","EMERGCONTACT":"He Liang Qiao (Father)","EMERGNUMBER":"416-888-8329","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":105,"NAME":"Kina Chien","GENDER":"Female","SCHOOL":"Sacred Heart High School for Girls","AGE":18,"EMAIL":"kina093222i4747@gmail.com","PHONE":"289-554-2304","EMERGCONTACT":"Dennis Chien","EMERGNUMBER":"416-388-5087","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":106,"NAME":"Lawrence Wong","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":17,"EMAIL":"w.t.c.lawrence@gmail.com","PHONE":"647-838-1789","EMERGCONTACT":"Virginia Wong","EMERGNUMBER":"416-357-1387","AVAIL":"Thursday 14, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":107,"NAME":"Leone Jing Qi","GENDER":"Female","SCHOOL":"Middlefield Collegiate Institute","AGE":17,"EMAIL":"qileone@gmail.com","PHONE":"647 868 4115","EMERGCONTACT":"Grace Qi","EMERGNUMBER":"647 867 3243","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":108,"NAME":"Lily Zhao","GENDER":"Female","SCHOOL":"Albert Campbell CI","AGE":16,"EMAIL":"lily.zhao.019@outlook.com","PHONE":"647-718-2148","EMERGCONTACT":"Qiu Xian Zhao","EMERGNUMBER":"416-818-6169","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":109,"NAME":"Linda Nguyen","GENDER":"Female","SCHOOL":"St. Basil-the-Great College","AGE":18,"EMAIL":"linda.nguyen30@hotmail.com","PHONE":"4165876210","EMERGCONTACT":"Son Nguyen","EMERGNUMBER":"4169179411","AVAIL":"Thursday 14;Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":110,"NAME":"Longfei Chen","GENDER":"Male","SCHOOL":"Albert Campbell C.I.","AGE":16,"EMAIL":"longfeichen2000@gmail.com","PHONE":"647-537-2983","EMERGCONTACT":"Liyuan Chen","EMERGNUMBER":"647-838-9585","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":111,"NAME":"Lucy Wei","GENDER":"Female","SCHOOL":"AY Jackson SS","AGE":17,"EMAIL":"wxylucy03@hotmail.com","PHONE":"6475887699","EMERGCONTACT":"Annie Hu","EMERGNUMBER":"6475887699","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":112,"NAME":"Lyanna Chen","GENDER":"Female","SCHOOL":"York Mills CI","AGE":16,"EMAIL":"lyannachen99@gmail.com","PHONE":"6479228219","EMERGCONTACT":"May Wong","EMERGNUMBER":"4168160310","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":113,"NAME":"Madison Wu","GENDER":"Male","SCHOOL":"Pierre Elliot Trudeau High School","AGE":15,"EMAIL":"carmadisonwu2000@gmail.com","PHONE":"4165200135","EMERGCONTACT":"Vivian Ly","EMERGNUMBER":"4169193232","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":114,"NAME":"Maggie Ng","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau HA","AGE":17,"EMAIL":"Maggie.m.ng@outlook.com","PHONE":"6476186718","EMERGCONTACT":"Anthony Yu","EMERGNUMBER":"4168988319","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":115,"NAME":"Maggie Shi","GENDER":"Female","SCHOOL":"Milliken Mills High School","AGE":15,"EMAIL":"macmac128@hotmail.com","PHONE":"6479692026","EMERGCONTACT":"Linda Mac","EMERGNUMBER":"6478216768","AVAIL":"Friday 15;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":116,"NAME":"Marco Tsang","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":16,"EMAIL":"marcoktsang@hotmail.com","PHONE":"647-761-8127","EMERGCONTACT":"Barbara Tsang","EMERGNUMBER":"416-707-0128","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":117,"NAME":"Marsha Dang","GENDER":"Female","SCHOOL":"Milliken Mills High School","AGE":17,"EMAIL":"island_prinsess@hotmail.com","PHONE":"6477207291","EMERGCONTACT":"Meichen Kuan","EMERGNUMBER":"6477207296","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":118,"NAME":"Matthew Morgan","GENDER":"Male","SCHOOL":"Bur Oak Secondary","AGE":16,"EMAIL":"lyew15@gmail.com","PHONE":"905 472 9289","EMERGCONTACT":"416 414 8200","EMERGNUMBER":"416 741 4246","AVAIL":"Thursday 14, Friday 15, Saturday 16","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":119,"NAME":"Matthew Wong","GENDER":"Male","SCHOOL":"Dr. Norman Bethune C.I.","AGE":18,"EMAIL":"matthew.wong.4298@hotmail.co.uk","PHONE":"4165272089","EMERGCONTACT":"Wen-Yi Chua","EMERGNUMBER":"4163203181","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":120,"NAME":"Max Yang","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":15,"EMAIL":"maxdyang2001@gmail.com","PHONE":"6479279988","EMERGCONTACT":"George Yang","EMERGNUMBER":"4168768866","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":121,"NAME":"Mei Fang Chen","GENDER":"Female","SCHOOL":"Albert Campbell C.I","AGE":16,"EMAIL":"chanyuche@hotmail.com","PHONE":"647-926-2184","EMERGCONTACT":"Wei Hong Chen","EMERGNUMBER":"647-926-2184","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":122,"NAME":"Michael Chang","GENDER":"Male","SCHOOL":"Markham District High School","AGE":15,"EMAIL":"chronicvalkyrie@gmail.com","PHONE":"4168579815","EMERGCONTACT":"Jessie Chen","EMERGNUMBER":"4168581869","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":123,"NAME":"Michael Xu","GENDER":"Male","SCHOOL":"Unionville High School","AGE":16,"EMAIL":"michael.xu99@gmail.com","PHONE":"647 609 8089","EMERGCONTACT":"Min Zhao","EMERGNUMBER":"647 203 5028","AVAIL":"Thursday 14, Friday 15, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":124,"NAME":"Michelle Cao","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"caomichelle01@gmail.com","PHONE":"647-469-1228","EMERGCONTACT":"Shumei Liu","EMERGNUMBER":"416-902-1228","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":125,"NAME":"Mikayla Zhang","GENDER":"Female","SCHOOL":"Michael power st Joesph","AGE":15,"EMAIL":"mikaylazhang4118@gmail.com","PHONE":"6479098375","EMERGCONTACT":"Arnold zhang","EMERGNUMBER":"6479880176","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":126,"NAME":"Mike Yang","GENDER":"Male","SCHOOL":"North Toronto Collegiate Institute","AGE":18,"EMAIL":"m.yang98765@gmail.com","PHONE":"6477044889","EMERGCONTACT":"Guochang Yang","EMERGNUMBER":"6474669418","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":127,"NAME":"Mike Yang","GENDER":"Male","SCHOOL":"North Toronto Collegiate Institute","AGE":18,"EMAIL":"m.yang98765@gmail.com","PHONE":"6477044889","EMERGCONTACT":"Guochang Yang","EMERGNUMBER":"6474669418","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":128,"NAME":"Monica Tsao","GENDER":"Female","SCHOOL":"St. Augustine CHS","AGE":16,"EMAIL":"monicatsaoo99@gmail.com","PHONE":"6472013365","EMERGCONTACT":"Peter Tsao","EMERGNUMBER":"4168093838","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":129,"NAME":"Munan Kong","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau High School","AGE":15,"EMAIL":"kongkeisha@gmail.com","PHONE":"4168353527","EMERGCONTACT":"Yanan Mu","EMERGNUMBER":"6479816205","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":130,"NAME":"Nathan Song","GENDER":"Male","SCHOOL":"Milliken Mills High School","AGE":17,"EMAIL":"nathansong114@hotmail.com","PHONE":"6477201191","EMERGCONTACT":"Sophia","EMERGNUMBER":"6477182189","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":131,"NAME":"Neville Shiu","GENDER":"Male","SCHOOL":"Richmond Green Secondary School","AGE":15,"EMAIL":"N.Shiu@outlook.com","PHONE":"6479943314","EMERGCONTACT":"Annie Zhang","EMERGNUMBER":"4167023397","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":132,"NAME":"Nia Abdullahi","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau High School","AGE":14,"EMAIL":"niaabdullahi@hotmail.com","PHONE":"6475736490","EMERGCONTACT":"Alfia Abdullahi","EMERGNUMBER":"6478853944","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":133,"NAME":"Nicholas Chung-Hun","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"nicholas.chunghun@gmail.com","PHONE":"9058897591","EMERGCONTACT":"Liping Chung-Hun","EMERGNUMBER":"9058897591","AVAIL":"Thursday 14;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":134,"NAME":"Olivia Ng","GENDER":"Female","SCHOOL":"Agincourt Collegiate Institute","AGE":16,"EMAIL":"olivialam25@hotmail.com","PHONE":"6477139331","EMERGCONTACT":"Peter Ng","EMERGNUMBER":"6478388658","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":135,"NAME":"Owen Tse","GENDER":"Male","SCHOOL":"Unionville High School","AGE":14,"EMAIL":"Owen.Tse0911@gmail.com","PHONE":"6478338083","EMERGCONTACT":"Mavis Tse","EMERGNUMBER":"4168241200","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":136,"NAME":"Patrick Du","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":17,"EMAIL":"patrickdurose@live.ca","PHONE":"647-607-8321","EMERGCONTACT":"Maggie","EMERGNUMBER":"647-779-8321","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":137,"NAME":"Queenie Dang","GENDER":"Female","SCHOOL":"Unionville High School","AGE":15,"EMAIL":"queenie_dang@hotmail.com","PHONE":"6417207301","EMERGCONTACT":"Mei Chen","EMERGNUMBER":"6477207296","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":138,"NAME":"Raymond Chow","GENDER":"Male","SCHOOL":"Albert Cambell Collegiate Institute","AGE":14,"EMAIL":"raymondc1314@hotmail.com","PHONE":"6479728876","EMERGCONTACT":"Kenneth Chow","EMERGNUMBER":"416 293 6636","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":139,"NAME":"Raymond Jesse Wu","GENDER":"Male","SCHOOL":"Milliken Mills High School","AGE":17,"EMAIL":"raymond__wu@hotmai.com","PHONE":"6477618612","EMERGCONTACT":"Lisa Wu","EMERGNUMBER":"6477068379","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":140,"NAME":"Renfrew Ao-Ieong","GENDER":"Male","SCHOOL":"Unionville High School","AGE":16,"EMAIL":"renfrew888@gmail.com","PHONE":"647-687-2288","EMERGCONTACT":"Sheren Fok","EMERGNUMBER":"647-886-3731","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":141,"NAME":"Richard Chin","GENDER":"Male","SCHOOL":"N/A","AGE":24,"EMAIL":"Richardmchin@hotmail.com","PHONE":"416 230 0210","EMERGCONTACT":"Gary Chin","EMERGNUMBER":"416 981 9287","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":142,"NAME":"Ricky Wang","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":15,"EMAIL":"ricky.wang_3500@hotmail.com","PHONE":"647 985 3138","EMERGCONTACT":"Mable Wang","EMERGNUMBER":"416 722 3138","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":143,"NAME":"Robert Liu","GENDER":"Male","SCHOOL":"Bayview Secondary School","AGE":16,"EMAIL":"robert.liu12231999@hotmail.com","PHONE":"4164356822","EMERGCONTACT":"Richard Liu","EMERGNUMBER":"4168199688","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":144,"NAME":"Ruobing Chen","GENDER":"Female","SCHOOL":"Bayview Secondary School","AGE":14,"EMAIL":"348924838@gapps.yrdsb.ca","PHONE":"647-974-1439","EMERGCONTACT":"Maggie Zheng","EMERGNUMBER":"647-282-8909","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":145,"NAME":"Ryan Xu","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":16,"EMAIL":"ryanxu101@gmail.com","PHONE":"4373456958","EMERGCONTACT":"Min Zhao","EMERGNUMBER":"6472035028","AVAIL":"Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":146,"NAME":"Sabrina Ho","GENDER":"Female","SCHOOL":"North Toronto CI","AGE":17,"EMAIL":"cookiemonsterho@gmail.com","PHONE":"6475272024","EMERGCONTACT":"Gloria Cheung","EMERGNUMBER":"4165360904","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":147,"NAME":"Sandy Liu","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":15,"EMAIL":"sandy.liu1123@live.ca","PHONE":"647-770-8921","EMERGCONTACT":"Jason Liu","EMERGNUMBER":"647-782-1933","AVAIL":"Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":148,"NAME":"Sarah Botros","GENDER":"Female","SCHOOL":"University of Toronto","AGE":28,"EMAIL":"sarah.botros12@gmail.com","PHONE":"647-717-0002","EMERGCONTACT":"Farah Botros","EMERGNUMBER":"647-818-6165","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":149,"NAME":"Sarah Lee","GENDER":"Female","SCHOOL":"St. Augustine CHS","AGE":16,"EMAIL":"lees2846@gmail.com","PHONE":"6479707811","EMERGCONTACT":"Wendy","EMERGNUMBER":"4169197811","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":150,"NAME":"Shaan Mehta","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":16,"EMAIL":"shaanmehta.2000@gmail.com","PHONE":"6477705695","EMERGCONTACT":"Puja Mehta","EMERGNUMBER":"6477207049","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":151,"NAME":"sharon","GENDER":"Female","SCHOOL":"unionville highschool","AGE":15,"EMAIL":"crystljane564564@yahoo.ca","PHONE":"6479933029","EMERGCONTACT":"wendy chen","EMERGNUMBER":"4168390211","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":152,"NAME":"Sharon Li","GENDER":"Female","SCHOOL":"pierre elliott trudeau high school","AGE":16,"EMAIL":"348753476@gapps.yrdsb.ca","PHONE":"647 867 1333","EMERGCONTACT":"Joanne Wang","EMERGNUMBER":"647 818 8918","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":153,"NAME":"Sharon Poon","GENDER":"Female","SCHOOL":"Pierre Elliot Trudeau high school","AGE":16,"EMAIL":"poonsharon413@hotmail.ca","PHONE":"6473025252","EMERGCONTACT":"katherine ng","EMERGNUMBER":"6472929495","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":154,"NAME":"Shelly Lu","GENDER":"Female","SCHOOL":"Unionville Meadows Public School","AGE":14,"EMAIL":"Shellyl2002@gmail.com","PHONE":"6478299883","EMERGCONTACT":"Lucy Xu","EMERGNUMBER":"6478299883","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":155,"NAME":"Siming Zhang","GENDER":"Male","SCHOOL":"Agincourt Collegiate Institute","AGE":17,"EMAIL":"simingzhang@live.com","PHONE":"4169882985","EMERGCONTACT":"David Zhang","EMERGNUMBER":"4168040346","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":156,"NAME":"Simmy Su","GENDER":"Female","SCHOOL":"Dr. Norman Bethune C.I","AGE":16,"EMAIL":"simm.was.here@gmail.com","PHONE":"647 929 2245","EMERGCONTACT":"Kai Mei Zhu","EMERGNUMBER":"416 272 2245","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":157,"NAME":"Sornnujah Kathirgamanathan","GENDER":"Female","SCHOOL":"Agincourt Collegiate Institute","AGE":16,"EMAIL":"sam.sornnu.kathir@gmail.com","PHONE":"647 784 4563","EMERGCONTACT":"Wimalalatha Gnanachandravel","EMERGNUMBER":"647 281 3404","AVAIL":"Saturday 16, Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":158,"NAME":"Starzia Lim","GENDER":"Female","SCHOOL":"Pierre Elliott Trudeau","AGE":17,"EMAIL":"Starzia_lim@hotmail.com","PHONE":"6479868272","EMERGCONTACT":"May","EMERGNUMBER":"6479738272","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":159,"NAME":"Stephanie Liu","GENDER":"Female","SCHOOL":"St Robert Catholic High School","AGE":17,"EMAIL":"stephaniexoliu@gmail.com","PHONE":"4167162408","EMERGCONTACT":"Nancy Liu","EMERGNUMBER":"4166716006","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":160,"NAME":"Stephen Xia","GENDER":"Male","SCHOOL":"Markville Secondsry School","AGE":17,"EMAIL":"Xia.stephen3@gmail.com","PHONE":"6478803936","EMERGCONTACT":"Zhou Hong Xia","EMERGNUMBER":"4167122969","AVAIL":"Friday 15;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":161,"NAME":"Terry Feng","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":14,"EMAIL":"terryfeng99@gmail.com","PHONE":"647-907-8955","EMERGCONTACT":"Crystal Ye","EMERGNUMBER":"416-970-8266","AVAIL":"Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":162,"NAME":"Tiffanie Truong","GENDER":"Female","SCHOOL":"Richmond Green Secondary School","AGE":15,"EMAIL":"Tiffanie.Truong@hotmail.com","PHONE":"647-402-3862","EMERGCONTACT":"Howie Truong","EMERGNUMBER":"416-402-0472","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":163,"NAME":"Tiffany Kwok","GENDER":"Female","SCHOOL":"Bur Oak Secondary School","AGE":15,"EMAIL":"leung_812@hotmail.com","PHONE":"6479922268","EMERGCONTACT":"Angel Leung","EMERGNUMBER":"6478233845","AVAIL":"Thursday 14;Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":164,"NAME":"Tiffany Lai","GENDER":"Female","SCHOOL":"AY Jackson Secondary School","AGE":17,"EMAIL":"tiffany6476@gmail.com","PHONE":"6477952116","EMERGCONTACT":"Maggie Lam","EMERGNUMBER":"6477089572","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":165,"NAME":"Timothy Yang","GENDER":"Male","SCHOOL":"Pierre Elliott Trudeau High School","AGE":15,"EMAIL":"ahst.yang@gmail.com","PHONE":"905 752 1660","EMERGCONTACT":"Andrew Yang","EMERGNUMBER":"905 505 0710","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":166,"NAME":"Tina Lam","GENDER":"Female","SCHOOL":"Agincourt Collegiate Institute","AGE":15,"EMAIL":"tinhlam6@gmail.com","PHONE":"4164175805","EMERGCONTACT":"Tinh Truong Lam","EMERGNUMBER":"4162987269","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":167,"NAME":"Tommy Xie","GENDER":"Male","SCHOOL":"Dr. Norman Bethune CI","AGE":16,"EMAIL":"tommyxie2000@gmail.com","PHONE":"6475730693","EMERGCONTACT":"Su Qin Su","EMERGNUMBER":"4169042727","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":168,"NAME":"Tony Shi","GENDER":"Male","SCHOOL":"Albert Campbell","AGE":15,"EMAIL":"secondoldesttony@gmail.com","PHONE":"6478770979","EMERGCONTACT":"Xiaomei Shi","EMERGNUMBER":"4168205799","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":169,"NAME":"Trixie Xu","GENDER":"Female","SCHOOL":"Unionville High School","AGE":17,"EMAIL":"trixie.xu.1999@hotmail.com","PHONE":"6479781591","EMERGCONTACT":"Amy Gao","EMERGNUMBER":"6476270830","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":170,"NAME":"Varisha Mayooran","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":15,"EMAIL":"varishamayooran@gmail.com","PHONE":"416-303-9635","EMERGCONTACT":"Sue Mayooran","EMERGNUMBER":"416-303-9635","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":171,"NAME":"Vicki Xu","GENDER":"Female","SCHOOL":"Richmond Hill High School","AGE":16,"EMAIL":"vickixu@live.ca","PHONE":"6478256888","EMERGCONTACT":"Hui Ling Xu","EMERGNUMBER":"416-659-8822","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":172,"NAME":"Victoria Wang","GENDER":"Female","SCHOOL":"Albert Campbell C.I.","AGE":15,"EMAIL":"sapphiregem75@gmail.com","PHONE":"647 801 6872","EMERGCONTACT":"Chieh Tsung Wang","EMERGNUMBER":"416 292 7008","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":173,"NAME":"Victoria Yau","GENDER":"Female","SCHOOL":"Richmond Green Secondary School","AGE":15,"EMAIL":"Victoria.yau@hotmail.com","PHONE":"6475259622","EMERGCONTACT":"Vivien Yau","EMERGNUMBER":"4166703326","AVAIL":"Thursday 14, Friday 15, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":174,"NAME":"Vincent Luu","GENDER":"Male","SCHOOL":"University of Toronto","AGE":20,"EMAIL":"vincent.luu@mail.utoronto.ca","PHONE":"6476098986","EMERGCONTACT":"Juan","EMERGNUMBER":"4162748587","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":175,"NAME":"Vincent Wang","GENDER":"Male","SCHOOL":"William Lyon Mackenzie C.I.","AGE":17,"EMAIL":"vinboy1999@gmail.com","PHONE":"647 632 6886","EMERGCONTACT":"Chieh Tsung Wang","EMERGNUMBER":"416 292 7008","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Large","IN":0,"HOURS":0},
      {"ID":176,"NAME":"Vivian Lau","GENDER":"Female","SCHOOL":"Richmond Hill High School","AGE":15,"EMAIL":"vimaylau@gmail.com","PHONE":"6479901398","EMERGCONTACT":"Lewis Lue","EMERGNUMBER":"9052374631","AVAIL":"Friday 15;Saturday 16","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":177,"NAME":"William Cao","GENDER":"Male","SCHOOL":"Markville Secondary School","AGE":14,"EMAIL":"runningzpy@hotmail.com","PHONE":"647-557-1608","EMERGCONTACT":"Su Luk Ching","EMERGNUMBER":"647-618-8872","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":178,"NAME":"Winnie Chen","GENDER":"Female","SCHOOL":"Middlefield Collegiate Institute","AGE":16,"EMAIL":"winnie991030@hotmail.com","PHONE":"6478799266","EMERGCONTACT":"Betty","EMERGNUMBER":"6478028266","AVAIL":"Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0},
      {"ID":179,"NAME":"Winnie Lin","GENDER":"Female","SCHOOL":"Markville Secondary School","AGE":14,"EMAIL":"l.winnie@outlook.com","PHONE":"6479377505","EMERGCONTACT":"Zhuo Chao Lin","EMERGNUMBER":"6478833818","AVAIL":"Thursday 14;Friday 15;Saturday 16;Sunday 17","SHIRT-SIZE":"Medium","IN":0,"HOURS":0},
      {"ID":180,"NAME":"Winnie Wang","GENDER":"Female","SCHOOL":"Unionville High School","AGE":14,"EMAIL":"winniewang0811@gmail.com","PHONE":"6475173880","EMERGCONTACT":"Dr. Mona Feng","EMERGNUMBER":"416 436 2288","AVAIL":"Thursday 14, Saturday 16, Sunday 17","SHIRT-SIZE":"Small","IN":0,"HOURS":0}
   ];
   var db = defaultDB;
   // Load db from storage, otherwise save db to storage
   if (window.localStorage.database) {
      db = JSON.parse(window.localStorage.database);
   } else {
      window.localStorage.database = JSON.stringify(db);
   }
   var calculateHours = function(volunteer) {
      if (volunteer.IN !== 0) {
         var time = ((new Date()).getTime() - volunteer.IN)/1000/60/60;
         volunteer.HOURS += time;
      }
   };
   return {
      reset: function() {
         db = defaultDB;
         window.localStorage.database = JSON.stringify(db);
      },
      all: function() {
         return db;
      },
      // Returns null if not found, otherwise returns object
      get: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               return db[i];
            }
         }
         return null;
      },
      getFromEmail: function(dbEmail) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].EMAIL === dbEmail) {
               return db[i];
            }
         }
         return null;
      },
      // Returns whether or not signIn was successful
      signIn: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].IN === 0) {
                  db[i].IN = (new Date()).getTime();
                  window.localStorage.database = JSON.stringify(db);
                  return;
               } else {
                  throw "Volunteer is already signed in";
               }
            }
         }
         throw "ID not found";
      },
      // Returns whether or not signOut was successful
      signOut: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].IN === 0) {
                  throw "Volunteer has not yet signed in";
               } else {
                  calculateHours(db[i]);
                  db[i].IN = 0;
                  window.localStorage.database = JSON.stringify(db);
                  return;
               }
            }
         }
         throw "ID not found";
      },
      addHours: function(dbID, hours) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               db[i].HOURS += hours;
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      },
      removeVolunteer: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               db.splice(i,1);
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      },
      addVolunteer: function(volunteer) {
         db.push(volunteer);
         window.localStorage.database = JSON.stringify(db);
      },
      updateShirt: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].SHIRT === "true") {
                  db[i].SHIRT = false;
               } else if (db[i].SHIRT === "false") {
                  db[i].SHIRT = true;
               }
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      },
      updateWaiver: function(dbID) {
         for (var i = 0; i < db.length; i++) {
            if (db[i].ID === parseInt(dbID)) {
               if (db[i].WAIVER === "true") {
                  db[i].WAIVER = false;
               } else if (db[i].WAIVER === "false") {
                  db[i].WAIVER = true;
               }
               window.localStorage.database = JSON.stringify(db);
               return;
            }
         }
         throw "ID not found";
      }
   };
});
