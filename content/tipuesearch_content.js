var tipuesearch = {"pages": [{'title': 'About', 'text': '組員 :41023118 吳政憲 41023120呂昕叡 \n 倉儲 : https://github.com/mdecd2023/2a-pj1ag17 \n 網站 : https://mdecd2023.github.io/2a-pj1ag17/content/index.html \n \n resume個人倉儲 \n 41023120: https://github.com/mdecd2023/resume-41023120 \n 41023118\xa0 https://github.com/mdecd2023/resume-41023118 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w3', 'text': 'w3 - 已完成分組網頁\xa0透過 stud2.cycu.org 執行動態網站 \n 心得:一開始要clone的時候一個人可以一個人不行搞了很久結果是網路問題因為沒有加ipv6的設定所以在ipv6不能clone後來把Proxy設定打進去就可以了。 \n w3 - 請各組寫一個程式判定 2a 哪一組已經完成網頁建置. \n w3 開始執行 \xa0 https://mde.tw/pjcopsim/content/bubbleRobTutorial.html \n 星期四補課時間, 要驗收 Tutorial1 (心得, 展示頁面說明各組員所完成項目, 說明該組的專案規劃) \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '', 'tags': '', 'url': 'w4.html'}, {'title': 'note', 'text': '創網站跟上傳步驟 \n 步驟簡述 \n 先下載 Filezilla portable \xa0 設定好站台(比較好用 \n git config --global http.proxy\xa0 http://p42.cycu.org:3128 \xa0 \n \xa0   git config --global user.name "name" \xa0 \n \xa0   git config --global user.email "email" \xa0 \n 打完會產生.gitconfig \n git clone --recurse-submodules git@demo:mdecad2022/site-github_帳號.git s \xa0 \n \xa0 \xa0 會產生site-學號 \n 上傳指令 \n source acp "提交說明字串" \xa0 \n \xa0 \n \n 下載server.py和config 放入倉儲(server.py要改成自己的 埠號 ) \n \n cd s, cd cmsimde, git pull origin master \xa0 \n \xa0 \xa0 更新版本(如果有改過密碼要把舊的config刪掉) \n \xa0 \n python3 server.py \xa0 \n \xa0 \xa0 執行server \n \n 如果server不能執行 \n ps axo pid.comm.user \n 可以查詢到以執行server \n kill -9 111919 \xa0 \n 可以殺掉自己的server \n \n https://stud2.cycu.org:8xxx \xa0 進到自己的網頁 \n 8xxx每個人都有專屬的 \n 要把proxy關掉 \n', 'tags': '', 'url': 'note.html'}, {'title': 'tutorial1', 'text': '模擬碰撞 \n \n \n \n \n \n   \n 碰撞模擬是告訴我們打開碰撞測會讓兩個球體不能待在同一個地方 \n \n \n \n \n bubbleRobTutorial製作步驟 \n 1.先做出BubbleRob(注意座標\xa0object special properties裡的3個都要勾分別是可碰撞可衡量可探測) \n 2.新增感應器(做完要把它放到球體裡面 \n 3.在新的分頁做出輪子(間距0.1)做完後再複製到主體然後新增兩個馬達把他轉90度馬達的mode要選Velocity兩個都是(做完要把它放到球體裡面 \n 4.在新的分頁做出slider和connection(slider放入connection slider的object special properties裡的3個都要勾) 做完後再複製到主體(要把它放到球體裡面 \n 5.組裝完成後倒入接近傳感器程式和graph的程式(注意零件名子要跟程式的一樣不然跑不動 \n 6.導完程式後就可以新增幾個圓柱來測試 \n 7.成功的話它前進時感應器掃到圓柱就會轉彎 \n 提供參考(圖 \n \n bubbleRobTutorial 主體製作 \n \n \n \n \n \n   \n \n \n \n \n bubbleRobTutorial Slider製作和匯入程式 (要選擇無摩擦材質) \n \n \n \n \n \n   \n 我們所導入的程式是lua是由巴西人寫的 \n \n bubbleRob運行 \n \n \n \n BubbleRob  檔案 \n 41023120心得:在做bubbleRobTutorial的時候一開始看不懂後來去看了同學做的才慢慢的做出來,我覺得裡面最困難的就是條座標跟角度,還有零件名稱也要注意要打得跟導入的程式一樣,才能運行,wink要分段拍不然檔案會太大。 \n 41023118心得:在製作的過程因為還不太熟悉CoppeliaSim，所以我只有負責一些簡單的部分，但在隊友的教學後有比較懂了，在隊友教完後我有自己在做一次但是它會原地轉圈，好險最後有解決。 \n 41023118 BubbleRob 檔案 \n', 'tags': '', 'url': 'tutorial1.html'}, {'title': '問題', 'text': "(以下利用chatgpt搜尋) \n 1.coppeliasim中的scene與model有何不同? \n Scene：表示整個 仿真環境 ，包括所有物體、傳感器、執行器、環境等。在CoppeliaSim中，一個場景文件包含了所有物體的幾何形狀、物理特性、控制代碼以及環境設置等信息。使用者可以通過創建不同的場景文件，來模擬不同的環境場景。 \n Model：表示單個 物體的模型 ，包括其幾何形狀、質量、物理特性等。在CoppeliaSim中，使用者可以通過添加各種模型，如機器人、傳感器等，來構建仿真環境。每個模型可以單獨編輯、調試和控制。 \n Scene是表示整個仿真環境的概念，而Model則是表示單個物體的概念。在CoppeliaSim中，使用者可以通過將多個Model放置在一個Scene中，來構建完整的仿真環境。 \n \n 2.在CoppeliaSim scene 中,何謂 dean model? \n \n \n \n 在CoppeliaSim中，Dean模型（Dean Model）是一種用於 建立複雜物體 的建模工具。這種建模工具可以將多個基本形狀（如球體、立方體、圓柱體等） 組合 在一起，形成一個複雜的物體。 \n Dean模型由CoppeliaSim的創始人Sylvain Joyeux博士開發，是CoppeliaSim建模中非常重要的一個特性。使用Dean模型，可以 簡化複雜物體 的建模過程，提高建模效率。Dean模型具有以下特點： \n \n \n 可以使用多種基本形狀：Dean模型支持使用多種基本形狀，包括球體、立方體、圓柱體、錐體等。 \n \n \n 可以創建自定義形狀：除了基本形狀，Dean模型還支持創建自定義形狀，這樣可以更好地滿足特定需求。 \n \n \n 可以嵌套使用：Dean模型可以嵌套使用，這樣可以構建更複雜的物體。 \n \n \n 可以控制物體的屬性：使用Dean模型可以控制物體的材質、質量、摩擦等屬性，這樣可以更好地進行仿真分析。 \n \n \n 總之，Dean模型是CoppeliaSim中的一個重要特性，可以用於建立複雜物體，簡化建模過程，提高建模效率。 \n \n \n \n \n 3.CoppeliaSim.ttt 檔案格式與.simscene.Xml 檔案格式有何不同? \n 文件格式：.ttt文件是 二進制格式的場景文件 ，而.simscene.xml文件是基於XML格式的 文本文件 。 \n 兼容性：CoppeliaSim可以讀取和保存這兩種格式的場景文件。但是，由於.tt文件是二進制格式的，因此在不同的機器上 移植可能會有一些問題 ，而.xml文件則 可以在不同的平台上較容易地移植和編輯 。 \n 可讀性：.ttt文件是二進制文件，因此對於使用者來說，不容易讀取和編輯。相反，.simscene.xml文件是純文本文件，可以使用常見的文本編輯器打開和編輯。 \n 儲存方式：.ttt文件可以包含壓縮的資料，因此通常比.simscene.xml文件更小。而.xml文件使用基於文本的儲存方式，可以讓使用者更容易地編輯和定制場景的細節。 \n 總之，這兩種場景文件格式 都可以在CoppeliaSim中使用 ，但是.tt格式可能會更有效率，而.xml格式可能更方便使用者編輯和分享。 \n \n 4.如何在 CoppeliaSim scene 中,如何利用Lua 以及 Python 建立 primitive type object, 並利用程式設定物件位置? \n 使用Lua腳本： \n 在CoppeliaSim中建立一個新場景。 \n 在場景中選擇一個可以容納物體的位置，例如地板。 \n 在左側場景樹中，右鍵點擊Scene Objects->Add->Primitive shape，選擇一個基本物體形狀，例如Cube。 \n 在場景中出現了一個新的基本物體。在Lua腳本編輯器中撰寫以下代碼來設置物體的位置： \n \n lua \n \n \n -- get the handle of the primitive object   local  objHandle=sim.getObjectHandle( 'Cube' )  -- set the object's position  sim.setObjectPosition(objHandle,  -1 , {x, y, z})  \n \n 其中，'Cube'是新建物體的名稱，x、y、z是物體的坐標值。 \n 使用Python腳本： \n \n \n 在CoppeliaSim中建立一個新場景。 \n \n \n 在場景中選擇一個可以容納物體的位置，例如地板。 \n \n \n 在左側場景樹中，右鍵點擊Scene Objects->Add->Primitive shape，選擇一個基本物體形狀，例如Cube。 \n \n \n 在場景中出現了一個新的基本物體。在Python腳本編輯器中撰寫以下代碼來設置物體的位置： \n \n \n \n vbnet \n \n \n #  get  the handle  of  the primitive  object  objHandle = sim.getObjectHandle( 'Cube')  #  set  the  object 's position  sim.setObjectPosition(objHandle, - 1 , [x, y, z])  \n \n 其中，'Cube'是新建物體的名稱，x、y、z是物體的坐標值。 \n 總之，使用Lua或Python腳本可以很容易地建立基本物體並設置其位置，這對於定制場景和進行仿真實驗非常有用 \n \n 5. coppeliasim中graph是用來顯示什麼的? \n Graph是用來 顯示數據變化趨勢的工具 ，可以顯示不同變量隨時間變化的趨勢，包括物體位置、速度、加速度、力、扭矩等。Graph可以同時顯示多個變量的趨勢，用戶可以自定義標籤、線型、顏色等顯示方式，讓用戶更容易閱讀數據。此外，Graph還可以將數據保存為CSV格式，方便進行數據分析和後處理。總之，Graph是CoppeliaSim中非常有用的工具之一，可以幫助用戶更好地了解仿真結果。 \n \n", 'tags': '', 'url': '問題.html'}, {'title': 'football', 'text': '製作足球場  檔案 \n \n \n \n \n \n \n   \n \n \n \n', 'tags': '', 'url': 'football.html'}]};