           <?php
		
        $dbname = 'wsthichtruyen';
        $dbhost = '127.5.86.130:3306';
        $dbuser = 'adminRmRTKJW';
        $dbpass = 'vqfl-fKS55j4';
		
        $connect = mysql_connect($dbhost, $dbuser, $dbpass);
        mysql_query("SET NAMES utf8");
        mysql_select_db($dbname);


        $function = $_GET['function'];
//		echo "<script type='text/javascript'>alert($function);</script>";

        switch ($function) {
            case 0://lấy danh sách tất cả các truyện
                $sqlcode = mysql_query("Select * from story ORDER BY `Title` ASC");                
                if ($sqlcode === FALSE) {
                    die(mysql_error()); // TODO: better error handling
                }
                $numrows = mysql_num_rows($sqlcode);
                if ($numrows > 0) {
                    $jsonObj = array();
                    while ($resultAllStory = mysql_fetch_object($sqlcode)) {
                        $jsonObj[] = $resultAllStory;
                    }
                    $final_res = json_encode($jsonObj);
                    echo $final_res;
                }
                break;
                
             case 1://lấy danh sách tất cả các chapter của truyện có id tại StoryID
                $StoryID = $_GET['StoryID'];
                //echo "<script type='text/javascript'>alert($StoryID);</script>";
                $queryStatement= 'Select * from Chapter where StoryID ='.$StoryID;
                //echo "<script type='text/javascript'>alert('$queryStatement');</script>";
                $sqlcode = mysql_query($queryStatement);    
                 
                if ($sqlcode === FALSE) {
                    die(mysql_error()); // TODO: better error handling
                }
                $numrows = mysql_num_rows($sqlcode);
                if ($numrows > 0) {
                    $jsonObj = array();
                    while ($resultAllChapter = mysql_fetch_object($sqlcode)) {
                        $jsonObj[] = $resultAllChapter;
                    }
                    $final_res = json_encode($jsonObj);
                    echo $final_res;
                }
                 break;
			
			case 2://lấy danh sách chapter của truyện có id= StoryID, và chapter id= ChapterID			
				$StoryID = $_GET['StoryID'];
				$ChapterID = $_GET['ChapterID'];				
				$queryStatement= 'Select * from Chapter where StoryID ='.$StoryID.' and ChapterID='.$ChapterID;
				//echo "<script type='text/javascript'>alert('$queryStatement');</script>";
				$sqlcode = mysql_query($queryStatement);   
				
				if ($sqlcode === FALSE) {
                    die(mysql_error()); // TODO: better error handling
                }
                $numrows = mysql_num_rows($sqlcode);
                if ($numrows > 0) {
                    $jsonObj = array();
                    while ($resultSelectedChapter = mysql_fetch_object($sqlcode)) {
                        $jsonObj[] = $resultSelectedChapter;
                    }
                    $final_res = json_encode($jsonObj);				
                    echo $final_res;
                }
			break;
			case 3://xử lý rating request : http://wsthichtruyen-1212491.rhcloud.com/?function=3&storyID=1&ratingPoint=2.0
				$storyID = $_GET['storyID'];
				$ratingPoint = $_GET['ratingPoint'];				
				
				$oldGood= mysql_result(mysql_query('Select GoodPoint from story where StoryID= '.$storyID.' limit 1'),0);
				$oldTotal= mysql_result(mysql_query('Select TotalPoint from story where StoryID= '.$storyID.' limit 1'),0);

				$oldGood+=$ratingPoint;
				$oldTotal+= 5;
								
				$queryStatement='Update story set TotalPoint= '.$oldTotal.', GoodPoint= '.$oldGood.' where StoryID = '.$storyID;
				$retval= mysql_query($queryStatement, $connect );	
				if(! $retval ) {
				die('Could not update data: ' . mysql_error());
				}
            echo "Updated rating successfully\n";
			break;
			case 4://xử lý couting lượt xem : http://wsthichtruyen-1212491.rhcloud.com/?function=4&storyID=1
				$storyID = $_GET['storyID'];				
				
				$view= mysql_result(mysql_query('Select View from story where StoryID= '.$storyID.' limit 1'),0);
				
				$view++;
				
				$queryStatement='Update story set View= '.$view.' where StoryID = '.$storyID;
				$retval= mysql_query($queryStatement, $connect );	
				if(! $retval ) {
				die('Could not update data: ' . mysql_error());
				}
            echo "Updated view successfully\n";
			break;
			case 5://tìm truyện http://wsthichtruyen-1212491.rhcloud.com/?function=5&title=ACBDE
				$titleTemp = $_GET['title'];
				
				$title= str_replace("%20"," ",$titleTemp);
				
				$queryStatement= "Select * from story where Title like '%".$title."%' ORDER BY `Title` ASC";
                $sqlcode = mysql_query($queryStatement);                
                if ($sqlcode === FALSE) {
                    die(mysql_error()); // TODO: better error handling
                }
                $numrows = mysql_num_rows($sqlcode);
                if ($numrows > 0) {
                    $jsonObj = array();
                    while ($resultAllStory = mysql_fetch_object($sqlcode)) {
                        $jsonObj[] = $resultAllStory;
                    }
                    $final_res = json_encode($jsonObj);
                    echo $final_res;
                }
                break;
			
        }
        ?>