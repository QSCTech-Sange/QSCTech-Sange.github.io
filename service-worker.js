/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/1001-A-B-Format.html","aef085f113f14f8a2022fe4be5576f79"],["/1002-A-B-for-Polynomials.html","84c8c896463666eb7027a69a11bf0ce7"],["/1003-Emergency.html","107b70aa6613f6d37634ee5d9de1604d"],["/1004-Counting-Leaves.html","b07ea11bc074ff5431849f840c458ef1"],["/1005-Spell-It-Right.html","b4cd87e584a777885ef8acbd7d9abb7e"],["/1006-Sign-In-and-Sign-Out.html","312f1004eb820488cbf5caf1cd0806bc"],["/1007-Maximum-Subsequence-Sum.html","2e3e1e00c330cd2cb5215bdac5ebdc77"],["/1008-Elevator.html","a38f5a8444ccc503fbd1b5647cedc258"],["/1009-Product-of-Polynomials.html","3b818d5cef9cf3ebcb24d1cc6d5f3377"],["/1010-Radix.html","1f3cf3b749dc33cb7dcb21636d41063a"],["/1011-World-Cup-Betting.html","7aecc541d46e2e6d981da1fe11c6fcbe"],["/1012-The-Best-Rank.html","8b19546d630f74715a737c09243ab119"],["/1013-Battle-Over-Cities.html","20d961ffe8dc284370b34d565ab1c20e"],["/1014-Waiting-in-Line.html","ffdf907763a8a1ac7d89bafd586a9c27"],["/1015-Reversible-Primes.html","038de3d24eda959f0b7b6750f245c32b"],["/1016-Phone-Bills.html","15120c96048946c2ab0fc336e58e76f7"],["/1017-Queueing-at-Bank.html","a4108fe5b3760ed99bfa892edb4bdea2"],["/1018-Public-Bike-Management.html","70fa5c5abfb7e0e3bffb9bb204f5ebe0"],["/1019-General-Palindromic-Number.html","9b53e84792d9ded63e5a3962f06d5d9b"],["/1020-Tree-Traversals.html","0e7088bb1f2fcfd96c30f568f2c5235e"],["/1021-Deepest-Root.html","027509a1bfd7b99910a70b1845c2cab3"],["/1022-Digital-Library.html","50bcc5b610c1f1058849836e39d393eb"],["/1023-Have-Fun-with-Numbers.html","7f43a762bb504a4cd348467693d15e8c"],["/1024-Palindromic-Number.html","d854c6d7d249820a76dcfacaabe3125a"],["/1025-PAT-Ranking.html","87a34ca59f80ca9918894fa5d31dd2bc"],["/1026-Table-Tennis.html","3e0d8d27b501c027a537afc40e9cb89c"],["/1027-Colors-in-Mars.html","75eb6319cb7ea86b1259f3f94d46e604"],["/1028-List-Sorting.html","a9d8e591cf42963d50a80c6339799571"],["/1029-Median.html","1d884c02f2f80516cafce7dd2d175377"],["/1030-Travel-Plan.html","19d484411ae3198b0f50b097e57ace71"],["/1031-Hello-World-for-U.html","7df3142b82faca5be1b7434a5e1d7f11"],["/1032-Sharing.html","dd5a2e819218ed3c986e506bf0ae263f"],["/1033-To-Fill-or-Not-to-Fill.html","7ab388f90cc848d1a45e588ae68eacf0"],["/1034-Head-of-a-Gang.html","44b06e93e40257afa2489a92d9f18169"],["/1035-Password.html","a8caff254a74ed4ad5e45ab6f60e912a"],["/1036-Boys-vs-Girls.html","87aed800a0237fad3b40c416a6864012"],["/1037-Magic-Coupon.html","644d408b725ffa3ef3ca495fc938ba59"],["/1038-Recover-the-Smallest-Number.html","f30a8e90972f59dc3c45f6acb018b965"],["/1039-Course-List-for-Student.html","4d1518fd9cebd3e5bdbef28d254fa4b5"],["/1040-Longest-Symmetric-String.html","eb79b7b48c005805f50bfea310cd6457"],["/1041-Be-Unique.html","a94c8d937f04db38014272188a06c75b"],["/1042-Shuffling-Machine.html","199b7dac6b4b5fa115ee8cadc21df358"],["/1043-Is-It-a-Binary-Search-Tree.html","08e5b82d63a4791e5e912c8b41b2bf2e"],["/1044-Shopping-in-Mars.html","6f9ca3bc61242fdbd1a138ca6dcf1241"],["/1045-Favorite-Color-Stripe.html","b85bc00e8d316625882480a4f5cc5006"],["/1046-Shortest-Distance.html","6b50cd79392ec15d9bf2f7964ca74064"],["/1047-Student-List-for-Course.html","cafddbe3c8fbd7644e1461fb40c86dab"],["/1048-Find-Coins.html","08e48672931957dad88b59e8ec77b7df"],["/1049-Counting-Ones.html","38cb5b5028137c7413a28cffb735aed8"],["/1050-String-Subtraction.html","ea7609995f4f3f95ef047f52b9ce226e"],["/1051-Pop-Sequence.html","6e84444c7b03ef2218685fbe95a6e4b0"],["/1052-Linked-List-Sorting.html","5605a3930233c7e45a633a3114ab7d04"],["/1053-Path-of-Equal-Weight.html","0cc4adb2ff29690166002911fbb3adfd"],["/1054-The-Dominant-Color.html","03cfd56777b19e37b09fefa0e3de1a64"],["/1055-The-World-s-Richest.html","1b45ae56af648519754f7d5fa62112fd"],["/1056-Mice-and-Rice.html","c1acea83f4c98d8c409bb2252facd605"],["/1057-Stack.html","adfcb56d6ecc2b0c6869b921e9a9abef"],["/1058-A-B-in-Hogwarts.html","ca80a729b87ac2d5af49a7556550021c"],["/1059-Prime-Factors.html","631ef6121397a089fd1ca048684c2b35"],["/1060-Are-They-Equal.html","49f47fd3195a9eb8df2fa8dbf48cbb09"],["/1061-Dating.html","88ab24f6154faffa48d8dd476672f237"],["/1062-Talent-and-Virtue.html","9bef9013fb225a2a40da0f534e46c6df"],["/1063-Set-Similarity.html","527c2dd6ff50f9670f10624bb6b4114e"],["/1064-Complete-Binary-Search-Tree.html","01bac0d5bcd381780171a545a11b8eb4"],["/1065-A-B-and-C-64bit.html","d3d2720c5b81491df43cbbe492b8fd9f"],["/1066-Root-of-AVL-Tree.html","8e08e1a4e06bafe78faa2fee0d83fcde"],["/1067-Sort-with-Swap-0-i.html","f8e033f8302cece41f66ea1edf58ffba"],["/1068-Find-More-Coins.html","2f1b468c3133f91f6eec13fc371584eb"],["/1069-The-Black-Hole-of-Numbers.html","974c8d3eba33b4f685fcb5971efc46ad"],["/1070-Mooncake.html","94205faaa1308c7f28155d4cf442e2e4"],["/1071-Speech-Patterns.html","ad439bcbefed3b92f1f21505a353bf8e"],["/1072-Gas-Station.html","b314bd58aca92230488931568d785b90"],["/1073-Scientific-Notation.html","3f9515ef7a50a80a998f993208e236c4"],["/1074-Reversing-Linked-List.html","a5ee01cce85aae521d6acd22eea23977"],["/1075-PAT-Judge.html","8d931c57bbac7e3a3d9423398c6bc9c3"],["/1076-Forwards-on-Weibo.html","6f80d5f6f9139c1d19f78fb22c9742fd"],["/1077-Kuchiguse.html","65c2b88e0a1d9cffdabb6e199a8274ee"],["/1078-Hashing.html","c15069a1c9e5503c77ca02addfec6a0f"],["/1079-Total-Sales-of-Supply-Chain.html","57bf816cc43fc75d58f90302ed58be9a"],["/1080-Graduate-Admission.html","4ca3621183727f5b4de064c2d1f5ee23"],["/1081-Rational-Sum.html","ae0b2dda00ef854f3dd800655ec0db5f"],["/1082-Read-Number-in-Chinese.html","7f2a2c74e6737b24523ab6939bd0a4b6"],["/1083-List-Grades.html","de2f2458ba7eed8a3436afa62b397a54"],["/1084-Broken-Keyboard.html","b9e34aa83dfd7e7d57e3e8b6005b5a3e"],["/1085-Perfect-Sequence.html","21cb5d38d6751f2eac5b44f3e560c7fe"],["/1086-Tree-Traversals-Again.html","5b1fd105c8e25cc78d4235380bd8228a"],["/1087-All-Roads-Lead-to-Rome.html","713fc7264cd1a7afba95dc5b31ebc754"],["/1088-Rational-Arithmetic.html","ab155445c9fe0c3e633f715fbd2e9726"],["/1089-Insert-or-Merge.html","ec1e798e64702d8d9dee12a0314c30a5"],["/1090-Highest-Price-in-Supply-Chiain.html","54bbdf647f2a15baf0b1b8f93568ba0b"],["/1091-Acute-Stroke.html","51dd5521ee59147959b6c0c4811c7832"],["/1092-To-Buy-or-Not-to-Buy.html","3075204d48b92ac10690b9b4c5dd6b0f"],["/1093-Count-PAT-s.html","82c4eeaf5c87ecd910dbe62392b10afc"],["/1094-The-Largest-Generation.html","a567fee260a80957e540c6411a915ab2"],["/1095-Cars-on-Campus.html","72136431df16d04cfd602343b3c917ae"],["/1096-Consecutive-Factors.html","1fc6dcd78a0579c92967a919abef30d3"],["/1097-Deduplication-on-a-Linked-List.html","e761155e59e8aac736a447b0ddd50757"],["/1098-Insertion-or-Heap-Sort.html","7c0163bc977b97e9f78e3bc73c3c009f"],["/1099-Build-A-Binary-Search-Tree.html","b41fff9a89e2ed7f56fa245904278821"],["/1100-Mars-Numbers.html","f46ab9092043a70665b25fce97c95872"],["/1101-Quick-Sort.html","f7ad38ea6bf69b11ef9442467010faf3"],["/1102-Invert-a-Binary-Tree.html","72583371ee93e84dca0e03b50dfc8a8c"],["/1103-Integer-Factorization.html","981717889309e311854d3e87b5c06606"],["/1104-Sum-of-Number-Segments.html","8f43a4caffbde82b94f3f24fdb5f4a68"],["/1105-Spiral-Matrix.html","5dcfec6ad876c1edab8f418246799292"],["/1106-Lowest-Price-in-Supply-Chain.html","69b5247d4e5640e72b3a68120f4723e2"],["/1107-Social-Clusters.html","cb4159e39046cad4f1ea3497d12036a6"],["/1108-Finding-Average.html","ea40150795f8a5ea8383c0c7de310fd4"],["/1109-Group-Photo.html","c78510624a4ccab5fbe91cc2a4889ccd"],["/1110-Complete-Binary-Tree.html","11646b33eea76691be0181601e736b86"],["/1112-Stucked-Keyboard.html","09398da1c54d76c95afdb950b6b8e30b"],["/1113-Integer-Set-Partition.html","a23cc6f61957cee1c838930623e74a74"],["/1114-Family-Property.html","05c524391d3b5dbe5240d9dc9ca1e500"],["/1115-Counting-Nodes-in-a-BST.html","b9e6d872e2004023d46c284b60031ddf"],["/1116-Come-on-Let-s-C.html","0a04987880b6afe60041f20058af91df"],["/1117-Eddington-Number.html","76c0f9b7985d3b13270823d56c2f1cb5"],["/1118-Birds-in-Forest.html","8520a08a6a40344571973a5c8f3bb81b"],["/1120-Friend-Numbers.html","467ad0b9d711444890c4b6d03a9cfba6"],["/1121-Damn-Single.html","b642e417aa9afa131a4b9858e6eed533"],["/1122-Hamiltonian-Cycle.html","1dd9fc3eea10f63de21fb84792599a29"],["/1124-Raffle-for-Weibo-Followers.html","0ee5f79e05c1f522d6972fda4fce0196"],["/1125-Chain-the-Ropes.html","0a3515704525c64f444f3e7f1e1c0012"],["/1126-Eulerian-Path.html","df1b9bd7ab0d3101a8f94f9623b4c5e9"],["/1128-N-Queens-Puzzle.html","1f5a0adab142ae74c5fed4c37cf8eaa3"],["/1129-Recommendation-System.html","4428c9486a9260082ee2a37e541f86f3"],["/1130-Infix-Expression.html","3060912a665b97b0795e559ff06949da"],["/1132-Cut-Integer.html","943be2e4fb35f9ff479af5789a740672"],["/1133-Splitting-A-Linked-List.html","4c80f5c92cad25e0794ef4a7448c2b13"],["/1134-Vertex-Cover.html","9810df05a9c93abbfc2deb8cbd7228b0"],["/1136-A-Delayed-Palindrome.html","a7b614416bc875f194b95636100167eb"],["/1137-Final-Grading.html","8c7294d737193720472943019fefd89c"],["/1138-Postorder-Traversal.html","d6ec215a0560baae4e1439a19a8b3ab1"],["/1140-Look-and-say-Sequence.html","c2c8493541c056be9b0413efb2868bfc"],["/1141-PAT-Ranking-of-Institutions.html","bb71cf97a3c9294b56a8222045902a43"],["/1142-Maximal-Clique.html","734627913f465f487484e9a566eea6f9"],["/1143-Lowest-Common-Ancestor.html","4a0379e87350e44745d38d2b5df01a63"],["/1144-The-Missing-Number.html","d77967d949c175eb6538e83e2e9dc678"],["/1145-Hashing-Average-Search-Time.html","ef1b536f955433dc479b0e939e2a0e1a"],["/1146-Topological-Order.html","0729cb523e7856dc5c8c82e1f697f8d8"],["/1147-Heaps.html","3b2f80df26a4ace99bc4a4ac2284d52a"],["/1148-Werewolf-Simple-Version.html","34dfedfb9f0396124ccd70dd85bd3515"],["/1149-Dangerous-Goods-Packaging.html","3d0da3e5582b0c18cf2f10597a91baad"],["/1150-Travelling-Salesman-Problem.html","31cfdd34dd0cfcf2fb4e8a3316824dba"],["/1151-LCA-in-a-Binary-Tree.html","3fda3f1bd077c8b5a462f9dc8b7d2eb2"],["/1152-Google-Recruitment.html","f97824e6a17f2a414ee10fed217478a4"],["/1153-Decode-Registration-Card-of-PAT.html","1a43b21ccd054f55de89809f990cc62d"],["/1154-Vertex-Coloring.html","6474a611e649a24f4f20f0d2b1b90577"],["/1155-Heap-Paths.html","27f6a3db99d69ee84fd5b60bf051da08"],["/119-杨辉三角-II.html","47fc4e932e11b9922b808193c9058201"],["/125-验证回文串.html","44dc1e26f709becdf6742bebea534fb9"],["/150-逆波兰表达式求值.html","f1652c98791c874a83e3628dd09490f0"],["/167-两数之和-II-输入有序数组.html","29a28754dd937ee1665ca6720fc2c1c5"],["/183-从不订购的客户.html","56c5ba707d32ae3de641c16cb97666b6"],["/189-旋转数组.html","aee9c2ddf55a93194e62b68e0d51a370"],["/19-删除链表的倒数第N个节点.html","2d59cb1c16f5d11540949b63d31f44f2"],["/2-两数相加.html","56b1ab8b7a2547376f07816bb5aa31c3"],["/234-回文链表.html","9e1e6c3abd5a96dcf1f0bca723d18c6d"],["/283-移动零.html","5087bd6a6d0a9fc60fe0784f5a1de013"],["/3-无重复字符的最长子串.html","1ec82a7edc76aa1e1175b706de86d877"],["/33-搜索旋转排序数组.html","549d802c24255567151b39dd321ea4f7"],["/349-两个数组的交集.html","a5ad59a2ae62cebdedf936be859fc505"],["/350-两个数组的交集-II.html","eee04fd12b566a17264d12e66243ca9f"],["/38-报数.html","5f916e52651a94b282a18c3d0ca61281"],["/394-字符串解码.html","9d5f169a9f762501697cb7db92126972"],["/4-寻找两个有序数组的中位数.html","d97b8530576c3a6c5a16b6a8cbf479e4"],["/404.html","fe4af09b8993fe379e5c472db25b216d"],["/48-旋转图像.html","13eb24a2e94dc327dfc8f89c863eb9a3"],["/494-目标和.html","90bc34e5f7aa6e644af3d029e0182542"],["/496-下一个更大元素-I.html","f4d03ca66a88ff65041ca6ff0e7bbd69"],["/498-对角线遍历.html","605670aaf504df1554fb0fda39b081c8"],["/54-螺旋矩阵.html","56e0b98e3b98b57a795636b0ddfdfc7a"],["/542-01-矩阵.html","6c851f0c798025f20d13477e10442e7d"],["/557-反转字符串中的单词-III.html","68b6c3b1daccc3eaf15afb527045c90e"],["/58-最后一个单词的长度.html","06c55d8efb6c9517e05c357964b04d15"],["/599-两个列表的最小索引总和.html","8b31847a953e26664c51cbc81099a0f1"],["/66-加一.html","fca94a8a398e7d285ded26e6674c8ddc"],["/707-设计链表.html","5f3aebe74ac798aadc3119bd4e5832d6"],["/724-寻找数组的中心索引.html","62c29574d21016d9daaca5605b678dc6"],["/728-自除数.html","5b585d68a3bb49dc7a61b522dc6c9da4"],["/733-图像渲染.html","046c817e3e71c0f7ae477bfb3eaba62d"],["/747-至少是其他数字两倍的最大数.html","c104d6f0ebb7580bb7830d11de827661"],["/832-翻转图像.html","4fcf5ea7a5c2bc970a69b1ef2983f151"],["/841-钥匙和房间.html","9044d0328c4b881875033a2c231735f4"],["/88-合并两个有序数组.html","a63e67633b7bd67e7da10da77d6be391"],["/884-两句话中的不常见单词.html","07a614f84a390bb25e3681868ecf96c3"],["/906-超级回文数.html","ae64151e1ea0e04f11980ce33817b8b3"],["/94-二叉树的中序遍历.html","04b9cf8b7722dd42f42cd233bc2d7915"],["/Android-Fragment.html","4399423db5174eed7be835d91aef8fea"],["/Chinese-Copywritting-Guidelines.html","54105fc21b3dd6cc06d32620169ca42b"],["/Fixed-Income-Securities-review.html","66337c903a0804c040a5301e4968c230"],["/Font-Suggestion.html","87e4858aa245332e4cee77e98d9a82a5"],["/GUI-Options-Calculator.html","2ffc9545044c61eb39a2eb7dee4ab4db"],["/Information-cascade-with-NN.html","996eaae4641303e9930a7b15fc60df23"],["/KPMG-2020.html","a036301642ba78bf6a161d60429fe067"],["/LeetCode-1217.html","872f110dba36619066582740fffab2d8"],["/LeetCode-1237.html","b8992aa4963503f374b73b268f65403f"],["/LeetCode-1304.html","2d9cfb5c592a627ee89904c193c7c3b1"],["/LeetCode-1313.html","29b7abfe39354c708077df40820e3db1"],["/LeetCode-34.html","e88e880f0554d96e82c3e2c5f13fd03c"],["/LeetCode-347.html","b4cf6b1717a4474ff0023abebda0ad25"],["/LeetCode-367.html","2edd963bb316960523c92c1b77a7f76f"],["/LeetCode-410.html","be4a52b0e7fc30ec3904e6398f4800ea"],["/LeetCode-419.html","3c57d93fc48904101093d46da8b91c01"],["/LeetCode-447.html","aae401e90f366b3d684ec1bbc2bb8543"],["/LeetCode-451.html","a75ccb7ecb89c71f23062e5db85e153a"],["/LeetCode-500.html","00d2404eb1df1d4eac6766c782aa0be2"],["/LeetCode-661.html","9371aebf92f792391a1bcdad8c1fb6a1"],["/LeetCode-697.html","37e3af4380be4a99b2ff7806ddb5e90d"],["/LeetCode-719.html","0bc10ba1751f7651769a697d4eccd314"],["/LeetCode-812.html","29dfdf67e2fe219f0756c82650914091"],["/LeetCode-98.html","687e3d661d13bc6a0630217fb14a262d"],["/Options-Calculator.html","1453a80a5e507a982f0b9ee94b3a693e"],["/PAT-Preface.html","717a7cadfa02199d238418ae3d6c0385"],["/Python-1.html","f5c3348ba96c506d65899e681dce7591"],["/Python-catalog.html","d6f116d58f67d3ba2b1a9e5fac6550a6"],["/Python-study-methods.html","c42217ec8e283f086a0c8a828d8607a1"],["/Python-tutorial.html","a011cd83edae7d1291c4c1c1ebc9c380"],["/SAS-in-2019.html","a2477ba690577879e4859542a615bb0c"],["/ZJUWLAN-login.html","defd3c635d476fd14781cbd071a9ecbe"],["/abandon-qiniu.html","ea2a69aa0dbb1edc8d9554e6ecfb642a"],["/about/index.html","58e93b34cfed20f59b9e284e366a4f22"],["/anaconda-problems.html","41877b72cc6272fa6aa6d444c1e06afb"],["/arch-latex.html","92581bb97ec834af5581ff26a602f643"],["/arch-linux-clean.html","f52140b7639fdc139b76056dd2de1211"],["/arch-on-Raspberrypi-2.html","3cc49748b481c5403b78bc339497ca7e"],["/arch-on-Raspberrypi.html","676cf53b07ce94936de45f0efece419a"],["/archives/2019/01/index.html","2063ef52bcef9e7e21c8efb3df49f090"],["/archives/2019/02/index.html","0295c1b96933afa426a72a6d101adf46"],["/archives/2019/04/index.html","488d3b1ee925621eab592699494d2365"],["/archives/2019/06/index.html","6c7984008daff0cae5873d530e291287"],["/archives/2019/08/index.html","968d4c5ac08ce25269bbee8fc6add4d2"],["/archives/2019/08/page/2/index.html","faae7a38f3ab36ebb45e463e798949c5"],["/archives/2019/08/page/3/index.html","4529fe852e337984e86b440f7278f2c3"],["/archives/2019/08/page/4/index.html","8d4969539f43916ce1c49c7db239983e"],["/archives/2019/08/page/5/index.html","e021d611cb4f5ab24c593cc94ff2a0bd"],["/archives/2019/08/page/6/index.html","6ec24139165165f65f94a60f259ba441"],["/archives/2019/08/page/7/index.html","ea248091c4b2be82b3a3e87265b23efc"],["/archives/2019/08/page/8/index.html","64ec896fec8361b91acf14bd564060b3"],["/archives/2019/08/page/9/index.html","c51a0322b823e428d1d28005843ae525"],["/archives/2019/09/index.html","e347dfbb3d969b9ab4dbf269d9123ea4"],["/archives/2019/09/page/2/index.html","0a8eb6d3e5057e7af72b2055fc2ac7ae"],["/archives/2019/09/page/3/index.html","7a67fa4516739d89e18d6c7bf69233cc"],["/archives/2019/09/page/4/index.html","acb7ced66b63c1b657e759c3295b07e6"],["/archives/2019/09/page/5/index.html","f68d183bfa0ff0ea67880101f8ba5a6b"],["/archives/2019/09/page/6/index.html","7f5c9a46c094c00a616af181a8ef087e"],["/archives/2019/10/index.html","3c81e9ed5e04767484b3fa3eb184706a"],["/archives/2019/11/index.html","c018272c9188d35dafbf3591ee73650a"],["/archives/2019/12/index.html","77188dd53b35a7af035fb20b5c3cdc90"],["/archives/2019/index.html","b55b52e41526d8fc27d6e8386e87f8cd"],["/archives/2019/page/10/index.html","e879762dbd2e0eb4d6bd2d20c61545db"],["/archives/2019/page/11/index.html","a34d989be66f00919704386d2655ba49"],["/archives/2019/page/12/index.html","dee86be0d2c832603b23aafcf8df4ff7"],["/archives/2019/page/13/index.html","b7cedb3117d15f274d2c8862896f0e7c"],["/archives/2019/page/14/index.html","4821b8d1ff95f56b9b682d1181dde0f0"],["/archives/2019/page/15/index.html","48b38a97075950c47616a8b9576495b1"],["/archives/2019/page/2/index.html","49ea021fed50866567f5507e59894ae5"],["/archives/2019/page/3/index.html","4244d38f78c5d0b982b22328ebed4467"],["/archives/2019/page/4/index.html","7e447d6dfef40e3a333cd1566be56b7a"],["/archives/2019/page/5/index.html","3ac303c4b23a5e23fe318fe0b1a5077a"],["/archives/2019/page/6/index.html","f6a0339f6c4c88328bfb78e5598dedea"],["/archives/2019/page/7/index.html","288213a1b071b7fa1d0b71e4cccce7b5"],["/archives/2019/page/8/index.html","dd7853e5abb51c58c9d598e14451a5e9"],["/archives/2019/page/9/index.html","133f17f797c3cbe7d9e1631cd162feab"],["/archives/2020/01/index.html","0237c1e5a4232138b2bc890d0dd075cc"],["/archives/2020/02/index.html","6570f3ebf6cd71ee5395df8ff0da584e"],["/archives/2020/index.html","02f65dbb0b50107ea48a25fefd3cad09"],["/archives/2020/page/2/index.html","d101fe57953a951bc3f5840a7b4f716b"],["/archives/index.html","eade3f0f62975f852da9b5909a34f4d7"],["/archives/page/10/index.html","633bf30c5010c5fecae6b0ec8e250520"],["/archives/page/11/index.html","2a0b2b9c3c81f39d07e3c6f60f25ed95"],["/archives/page/12/index.html","6ff898c07d3bbace4779c3847d111223"],["/archives/page/13/index.html","5d8809bfd6292717b8e130cd13cc39a6"],["/archives/page/14/index.html","c8b8fac224a032f58609990acc4a67b5"],["/archives/page/15/index.html","4a1e1431c25c1634cce5d97e75c37eb0"],["/archives/page/16/index.html","8209fe69016e01109cbf0706c69a4d9f"],["/archives/page/17/index.html","4fd32db748d8c27da79db758febfde71"],["/archives/page/2/index.html","7a3e892e353780a58f1495925ae45eb3"],["/archives/page/3/index.html","16f7ff03979465cd51cbbfef26a0079c"],["/archives/page/4/index.html","159c5b74b39444bb9154d44c334e5151"],["/archives/page/5/index.html","bbd4234dc62d259e135fc4c9371c5c00"],["/archives/page/6/index.html","62ff8fd1886fd6e6625c51393f4edd4f"],["/archives/page/7/index.html","583a0c72bd3d144459e403797fe2f583"],["/archives/page/8/index.html","3c1b5c8d5c849a15ea4f9cfb81f6a217"],["/archives/page/9/index.html","466fc1649e03f3dfb8ff4e55be5c205c"],["/asset-pricing-review.html","21eed2cf670f99d251fce4d47913d6d7"],["/categories/Android/index.html","1055d712bc172df642c1c684d4b43f22"],["/categories/Jupyter-Noterbook/index.html","0053fccc742801257f53917f49b40342"],["/categories/LaTex-系列教程/index.html","33edb4d3b9fadc1ed1d4bdde1eeaf785"],["/categories/LeetCode/index.html","c9e51673b497d2c6601aee918048ec67"],["/categories/LeetCode/page/2/index.html","9aa535438972af812d02c42f86fd4c6a"],["/categories/LeetCode/page/3/index.html","577f0ec5c0fccf575e75a2faec133f69"],["/categories/LeetCode/page/4/index.html","588d6adf47a85b61eb24ff641667d982"],["/categories/Linux/index.html","967622c30f95cb89074c5803fa5fc6cd"],["/categories/PAT/index.html","f114a51a8dac7d8025e6edb462c6152d"],["/categories/PAT/page/10/index.html","4d82f8dced8add0773ded56321a857e2"],["/categories/PAT/page/2/index.html","1a4c4c56dfb72897720b0c34ffe05efc"],["/categories/PAT/page/3/index.html","3406a58332fd8f008dcac7cb87973a6b"],["/categories/PAT/page/4/index.html","70527bb461fa0bf58a72ede51baeec70"],["/categories/PAT/page/5/index.html","64ea505ce5c0343d42880859733d058e"],["/categories/PAT/page/6/index.html","7541d7bf4cc95535b4ab0db56cba9053"],["/categories/PAT/page/7/index.html","a280d047df286447df600bf5f1bf0f80"],["/categories/PAT/page/8/index.html","625d2171f46b9412372738c5357a4b4b"],["/categories/PAT/page/9/index.html","c429c4573b452dda2f91c2884ab1c948"],["/categories/Python-教程/index.html","ec796bee70991ce8983d1cac9a01c45e"],["/categories/Python/index.html","3e8d186e6d413b24b209a7bcb4b2d1d8"],["/categories/SAS/index.html","a3e4d7970c856765169c8381815e2e37"],["/categories/index.html","921ae5b81d01e0a78c98fbdcbb05a725"],["/categories/前端/index.html","4df648c2958a148781d0362ac1f28322"],["/categories/博客/index.html","d4e79ff4da506625349c01f78bfb2a73"],["/categories/字体/index.html","19cbda596956e958b59d8328e8d03932"],["/categories/新生/index.html","47e829cbadce790bc095a4f62043eb05"],["/categories/树莓派/index.html","c6dbb8dc5ec4bc4291b41c1d64f62a42"],["/categories/网络/index.html","b316ab21120ed51049b3ed8bb4e6369d"],["/categories/计算机视觉/index.html","5fcca5cbf272d3b6a61d442e1e173009"],["/categories/金融/index.html","4186c38b53054a567e00e261a2f64043"],["/choosetutor.html","50154cf81309e7bd1db4842cd18f4973"],["/css/index.css","dd0340d3e1ffc0e019c1ff39e5b636a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepcopy-vs-swallowcopy.html","b844c958befee6c2f6ad97bd9a320b9b"],["/econometrics-review.html","67208c36166ebd055ad7e60a163e977c"],["/economy-college-interview.html","4699e47c427ed6629a7f9cf8ae794db8"],["/economy-computer.html","0222912d0f841e541e37dc8b242bcfbd"],["/images/pwaicons/192.png","6349905c8b10139b0e22587246e45714"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pwa/16.png","333887eb35525520fbb21f7420e8746a"],["/img/pwa/32.png","fc33024c16407d10d7cb3c632314f689"],["/img/pwa/apple-touch-icon.png","fc33024c16407d10d7cb3c632314f689"],["/img/red_shark.webp","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","68d84fc81a8330b66ac093ba4ce6f38f"],["/international-trade.html","654b171477b1b0fff8deb33cec42f71d"],["/investor-sentiment-ans-bond-risk-premia-in-SAS.html","4494eded8fd46ab0f8015539f5bb254b"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/jsDelivr.html","7bdadfe8f6a656b99f3478465845782e"],["/jupyter-notebook-tips.html","bca84577b17f34354366239dbb0e61cd"],["/leetcode-preface.html","bf10c00971fb24ffa07ed0c1222eed78"],["/link/index.html","a016063f3fc649c11522ac4e46f6d52a"],["/nowadays.html","0ebff4ff228f4ccf95411f2f0bdb2123"],["/option-price.html","3b4e6d8d6e0d708559160231f02fe0ab"],["/page/10/index.html","ab2660576bf3bdf7eb003c0a79b109f5"],["/page/11/index.html","1f086452991aa9c2f336d1dc4200634c"],["/page/12/index.html","a794c2a050a584ee8d7c15cf291d4a5b"],["/page/13/index.html","97309ed7e32ba6e329e06ef0bce89cd7"],["/page/14/index.html","3ec20417346c28b2c52ac4460a979157"],["/page/15/index.html","d4bc71f68971e65ecf378d993d61c776"],["/page/16/index.html","b1ab287df8f90e80ac4aae3f388e01ac"],["/page/17/index.html","f21f9e6cca7b376abc416c0446dda61a"],["/page/18/index.html","3f2f5c54b2435f3e26313432d05a69dc"],["/page/19/index.html","caca7f381d0d0f3da263c7c722aaeeb8"],["/page/2/index.html","ee65083b6bd6795fdf7a7037120b87f9"],["/page/20/index.html","03166265c8d6ee5b257b1336cf0ba50c"],["/page/21/index.html","da715b4fe4ad993b32528dee24586b43"],["/page/22/index.html","75c1113b28fab8de3c79ba46e4222842"],["/page/23/index.html","d82ab02da8613411ade3777671e65c29"],["/page/24/index.html","463e828f153422431cf31da343d1750a"],["/page/25/index.html","8b75eb5370ab43b9b4ad105bb54f8514"],["/page/3/index.html","4e8675bc26c9cf6a9bdf0fbeb36978f0"],["/page/4/index.html","70a133b60e19283ffa433c948e125878"],["/page/5/index.html","612f2ffd118876dc02ec8efeb698191d"],["/page/6/index.html","766be504dfc0c6a3576fa0a41ef860c5"],["/page/7/index.html","cf8ac5a953998bc8480d0a495810b326"],["/page/8/index.html","228a386c1934f4651ac711568847d12a"],["/page/9/index.html","78ab0c258f4a6299bbe74e40c88a94a8"],["/sas-result.html","6c4c098b21cf57ce2e14a894dfaf2947"],["/social-science-major.html","92c1f34183592aa1800c86123cf5f091"],["/tags/01背包/index.html","7d40c3dda415bdc284e32383e2977844"],["/tags/Anaconda/index.html","2e341dc51f7cd19eef68d8ddd1007130"],["/tags/Android/index.html","269a0ef82acc42084e50b0710ac455c9"],["/tags/Arch/index.html","aaaf60cf0aa4e5588036f9c27fdaabd3"],["/tags/BFS/index.html","81c54102305f4491bed8a1acbe01a7ef"],["/tags/BST/index.html","625ce82edb98f607baac429d8e9f44ca"],["/tags/CV/index.html","dcffdd4ff51be9053966756aa93b7586"],["/tags/DFS/index.html","28e02cc293b87d9855f0bbe4a1bd3c25"],["/tags/DFS/page/2/index.html","0a7ddc025c8b7618b94ffec2531cad1c"],["/tags/Dijkstra/index.html","97cc61dce898c0f2c28414230ae07607"],["/tags/Jupyer-Notebook/index.html","391aa95faae12c216b598e958309ddd5"],["/tags/LaTex/index.html","e54ab3c50098779ce8cede5e57597fe5"],["/tags/LeetCode/index.html","155df2632b2932af20a41ac17d386d14"],["/tags/LeetCode/page/2/index.html","bc1a45b19d1a488825b77b8339679849"],["/tags/LeetCode/page/3/index.html","5b25ad3e2fb0e0c9f5b827205113af10"],["/tags/LeetCode/page/4/index.html","b0e215eacd75df6baea57b3a7d628978"],["/tags/Linux/index.html","9d28f04dee0c2d1a347567df9cbda06d"],["/tags/PAT/index.html","2031774a5d8ea4e627f398a46087c303"],["/tags/PAT/page/10/index.html","0a9de5d065747f971f5b6bebbddf464a"],["/tags/PAT/page/2/index.html","ab10f8b1f7edd08885c24ca132528ab0"],["/tags/PAT/page/3/index.html","17e7a14581d4feb8264dce2286d9de32"],["/tags/PAT/page/4/index.html","b3caa7f5951fbf30d843959acfc3c21c"],["/tags/PAT/page/5/index.html","1c81b73f8bfe7aa54c45b3f2dd5781ad"],["/tags/PAT/page/6/index.html","ecda57bd257604adb785aed8770e1eed"],["/tags/PAT/page/7/index.html","36a00063fac9406c73e1f98e4b9adfff"],["/tags/PAT/page/8/index.html","c6b2120c4ea36e928d2ade365f0f31a9"],["/tags/PAT/page/9/index.html","1ab4a787526064005d96282999e32678"],["/tags/PyPI/index.html","d84e650812803b4070bc60c41362cb6f"],["/tags/Python/index.html","dc87405c4e0c43b28afe79687209edc0"],["/tags/Qt/index.html","aea5db0ae6958b1dfd52be6ff107b33f"],["/tags/RNN/index.html","ff75fab76d50d0489e092806b2688776"],["/tags/SAS/index.html","e02beddb3b09d7f02517ae78e451f1dd"],["/tags/SQL/index.html","8ec61714110d09d1145356bb4e8a215a"],["/tags/conda/index.html","312904ebaed05542bd8a01cd4eaa4948"],["/tags/index.html","ac6adfd18e315adb4312f5c873271410"],["/tags/jsDelivr/index.html","b2ae6d34001f888860d9eed65e3659c7"],["/tags/七牛/index.html","1fc67939fa9374039dcf4a668acd1506"],["/tags/二分查找/index.html","5a82221b19923b9c304c372913636cd0"],["/tags/二叉搜索树/index.html","dc0c4c2815b1caacb56ec6e387dceb72"],["/tags/前端/index.html","e7153e85d314a013aac53911502fb874"],["/tags/动态规划/index.html","f3e6520fa1e98d8f79ba0fee698d95d9"],["/tags/双指针/index.html","0d8235bb4e27ff09da143cddc35de04b"],["/tags/哈希表/index.html","6408deed50211c95f2f67fe3d4648c53"],["/tags/哈希表/page/2/index.html","c4cc7e3f850699b726cd20f808d4ec57"],["/tags/哈希集/index.html","f9ac38d8dae37ee8d917545b45a556e2"],["/tags/哈希集合/index.html","d1b586edc920f851e9b232468914acde"],["/tags/固定收益证券/index.html","9e9f9bf8c13b9a2188348bfd29ec8daf"],["/tags/国际财务管理/index.html","7657cc77359a931126cb5bf85a5e6bb0"],["/tags/图床/index.html","0c4acc4722831d505cb810b5ef233609"],["/tags/字体/index.html","12a469e70a647a629add653db76f4e88"],["/tags/字符串/index.html","174e25a7343a8c87b77cc6740c9609d7"],["/tags/字符串/page/2/index.html","82d821570866cc8937cc626ab391291b"],["/tags/小Tips/index.html","29abfdf9322f2411cbbe281443a8ce21"],["/tags/并查集/index.html","255b363f738802d72a205bbd56e8930a"],["/tags/广度优先搜索/index.html","5b1e4033edf6eabf7bafc42ead6111fb"],["/tags/序言/index.html","adbb25af1aa2df0e512ce15095f3c9bb"],["/tags/感知器算法/index.html","16855bccedd7672722ecf3f9d18cedf1"],["/tags/排序/index.html","d3ace595b18c51eaf80c2cd3286f9d53"],["/tags/教务网/index.html","11a869b5e661e0a3070b8b20df89fc4d"],["/tags/数据科学/index.html","575ed9bcd0e5706ab9a4592f0cf3f8bd"],["/tags/新生/index.html","407eb16270c6c019af2572b0c205b9e1"],["/tags/期权/index.html","5ba5919244caa5c848d041885488a89e"],["/tags/栈/index.html","85f9b651baff20ea85b24b1ddd667748"],["/tags/树/index.html","74bebd9bd710b22550fa9ac91d6d9ad3"],["/tags/树莓派/index.html","212ea8f42a3d01166573a86f05838ce5"],["/tags/桶排/index.html","1284183677c4496b91dd1b29e6fc8b50"],["/tags/毕马威/index.html","61b25fcfbb5fd00e686c72f1d663dd10"],["/tags/浅拷贝/index.html","aa2f81c6e2385ae612d9f5444bb1db4b"],["/tags/深度优先搜索/index.html","30385bee9f2bf5ce543a3ed5d587cbc1"],["/tags/深度学习/index.html","d04d281cc02271cfb26ed9cf08554271"],["/tags/深拷贝/index.html","55bfec5366477b20dacaa32169ce1b47"],["/tags/牛顿法/index.html","79b90145563e302e74fbf0bc625f96e2"],["/tags/目标检测/index.html","c71d67fddde6638ef70e51a9d964c39b"],["/tags/神经网络/index.html","ee6b83737c1d9e88cdef04885ac63e4c"],["/tags/网络/index.html","f943435e7639278d97b795ac4f96445a"],["/tags/行为金融/index.html","9d609b7cbde7c20ecfee6a5059535b20"],["/tags/计算机视觉/index.html","01aac5ca7d3cea09e64b896258b20aa3"],["/tags/计量经济学/index.html","148b088c1ca9cf565beccf1c84396aa1"],["/tags/贪心算法/index.html","053cb560cb2171018c11413d406beb2d"],["/tags/资产定价/index.html","30084932bc5490cc0764eed6cc55786a"],["/tags/金融/index.html","e097c82edcebd2b424620292cb70b30d"],["/tags/链表/index.html","117166d5d7c7bc15feb83aa6f103e510"],["/tags/题解/index.html","46edad73926480ca6589e9f4b81ad266"],["/tags/题解/page/10/index.html","b7a73828ce1fa3500d603a0ef4edfdfe"],["/tags/题解/page/11/index.html","d241239ecfd9bb1799d4bf9be049a950"],["/tags/题解/page/12/index.html","9e79b0d4b18f8073e52d2183359ebad0"],["/tags/题解/page/13/index.html","66957b70994c41f98f08fddb987453e7"],["/tags/题解/page/14/index.html","a4f428eb4c5d8ff46db14dd2405796bb"],["/tags/题解/page/2/index.html","503ea1f6be74b1f588350f3f70235e4c"],["/tags/题解/page/3/index.html","ae4adb632d41f8c94d741a4150a64f7d"],["/tags/题解/page/4/index.html","853b7e5f8f478329f1c1136f8ddf558d"],["/tags/题解/page/5/index.html","a038e5da651e5f3765c77f14af664b95"],["/tags/题解/page/6/index.html","ff40f7548d24161d8cbab8d966f51af2"],["/tags/题解/page/7/index.html","0e5a7441d9b45418b8bccae6f3518f44"],["/tags/题解/page/8/index.html","9de3f16f2e847d80f8fd095856ca71ab"],["/tags/题解/page/9/index.html","8b0f9fde36158ff4f42ee4f0f06f5fa5"],["/threeone.html","150e155d4d1d79ad0662acf87288b5c9"],["/upload-to-pypi.html","d71c35f5847467a9e95ab84299a3a0cd"],["/win10-1903-network.html","41a34fa43e3301695412f885cdd6b710"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://qsctech-sange.github.io/"});




