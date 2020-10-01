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

var precacheConfig = [["/1001-A-B-Format.html","aef085f113f14f8a2022fe4be5576f79"],["/1002-A-B-for-Polynomials.html","84c8c896463666eb7027a69a11bf0ce7"],["/1003-Emergency.html","107b70aa6613f6d37634ee5d9de1604d"],["/1004-Counting-Leaves.html","b07ea11bc074ff5431849f840c458ef1"],["/1005-Spell-It-Right.html","b4cd87e584a777885ef8acbd7d9abb7e"],["/1006-Sign-In-and-Sign-Out.html","312f1004eb820488cbf5caf1cd0806bc"],["/1007-Maximum-Subsequence-Sum.html","2e3e1e00c330cd2cb5215bdac5ebdc77"],["/1008-Elevator.html","a38f5a8444ccc503fbd1b5647cedc258"],["/1009-Product-of-Polynomials.html","3b818d5cef9cf3ebcb24d1cc6d5f3377"],["/1010-Radix.html","1f3cf3b749dc33cb7dcb21636d41063a"],["/1011-World-Cup-Betting.html","7aecc541d46e2e6d981da1fe11c6fcbe"],["/1012-The-Best-Rank.html","8b19546d630f74715a737c09243ab119"],["/1013-Battle-Over-Cities.html","20d961ffe8dc284370b34d565ab1c20e"],["/1014-Waiting-in-Line.html","ffdf907763a8a1ac7d89bafd586a9c27"],["/1015-Reversible-Primes.html","038de3d24eda959f0b7b6750f245c32b"],["/1016-Phone-Bills.html","15120c96048946c2ab0fc336e58e76f7"],["/1017-Queueing-at-Bank.html","a4108fe5b3760ed99bfa892edb4bdea2"],["/1018-Public-Bike-Management.html","70fa5c5abfb7e0e3bffb9bb204f5ebe0"],["/1019-General-Palindromic-Number.html","9b53e84792d9ded63e5a3962f06d5d9b"],["/1020-Tree-Traversals.html","0e7088bb1f2fcfd96c30f568f2c5235e"],["/1021-Deepest-Root.html","027509a1bfd7b99910a70b1845c2cab3"],["/1022-Digital-Library.html","50bcc5b610c1f1058849836e39d393eb"],["/1023-Have-Fun-with-Numbers.html","7f43a762bb504a4cd348467693d15e8c"],["/1024-Palindromic-Number.html","d854c6d7d249820a76dcfacaabe3125a"],["/1025-PAT-Ranking.html","87a34ca59f80ca9918894fa5d31dd2bc"],["/1026-Table-Tennis.html","3e0d8d27b501c027a537afc40e9cb89c"],["/1027-Colors-in-Mars.html","75eb6319cb7ea86b1259f3f94d46e604"],["/1028-List-Sorting.html","a9d8e591cf42963d50a80c6339799571"],["/1029-Median.html","1d884c02f2f80516cafce7dd2d175377"],["/1030-Travel-Plan.html","19d484411ae3198b0f50b097e57ace71"],["/1031-Hello-World-for-U.html","7df3142b82faca5be1b7434a5e1d7f11"],["/1032-Sharing.html","dd5a2e819218ed3c986e506bf0ae263f"],["/1033-To-Fill-or-Not-to-Fill.html","7ab388f90cc848d1a45e588ae68eacf0"],["/1034-Head-of-a-Gang.html","44b06e93e40257afa2489a92d9f18169"],["/1035-Password.html","a8caff254a74ed4ad5e45ab6f60e912a"],["/1036-Boys-vs-Girls.html","87aed800a0237fad3b40c416a6864012"],["/1037-Magic-Coupon.html","644d408b725ffa3ef3ca495fc938ba59"],["/1038-Recover-the-Smallest-Number.html","f30a8e90972f59dc3c45f6acb018b965"],["/1039-Course-List-for-Student.html","4d1518fd9cebd3e5bdbef28d254fa4b5"],["/1040-Longest-Symmetric-String.html","eb79b7b48c005805f50bfea310cd6457"],["/1041-Be-Unique.html","a94c8d937f04db38014272188a06c75b"],["/1042-Shuffling-Machine.html","199b7dac6b4b5fa115ee8cadc21df358"],["/1043-Is-It-a-Binary-Search-Tree.html","08e5b82d63a4791e5e912c8b41b2bf2e"],["/1044-Shopping-in-Mars.html","6f9ca3bc61242fdbd1a138ca6dcf1241"],["/1045-Favorite-Color-Stripe.html","b85bc00e8d316625882480a4f5cc5006"],["/1046-Shortest-Distance.html","6b50cd79392ec15d9bf2f7964ca74064"],["/1047-Student-List-for-Course.html","cafddbe3c8fbd7644e1461fb40c86dab"],["/1048-Find-Coins.html","08e48672931957dad88b59e8ec77b7df"],["/1049-Counting-Ones.html","38cb5b5028137c7413a28cffb735aed8"],["/1050-String-Subtraction.html","ea7609995f4f3f95ef047f52b9ce226e"],["/1051-Pop-Sequence.html","6e84444c7b03ef2218685fbe95a6e4b0"],["/1052-Linked-List-Sorting.html","5605a3930233c7e45a633a3114ab7d04"],["/1053-Path-of-Equal-Weight.html","0cc4adb2ff29690166002911fbb3adfd"],["/1054-The-Dominant-Color.html","03cfd56777b19e37b09fefa0e3de1a64"],["/1055-The-World-s-Richest.html","1b45ae56af648519754f7d5fa62112fd"],["/1056-Mice-and-Rice.html","c1acea83f4c98d8c409bb2252facd605"],["/1057-Stack.html","adfcb56d6ecc2b0c6869b921e9a9abef"],["/1058-A-B-in-Hogwarts.html","ca80a729b87ac2d5af49a7556550021c"],["/1059-Prime-Factors.html","631ef6121397a089fd1ca048684c2b35"],["/1060-Are-They-Equal.html","49f47fd3195a9eb8df2fa8dbf48cbb09"],["/1061-Dating.html","88ab24f6154faffa48d8dd476672f237"],["/1062-Talent-and-Virtue.html","9bef9013fb225a2a40da0f534e46c6df"],["/1063-Set-Similarity.html","527c2dd6ff50f9670f10624bb6b4114e"],["/1064-Complete-Binary-Search-Tree.html","01bac0d5bcd381780171a545a11b8eb4"],["/1065-A-B-and-C-64bit.html","d3d2720c5b81491df43cbbe492b8fd9f"],["/1066-Root-of-AVL-Tree.html","8e08e1a4e06bafe78faa2fee0d83fcde"],["/1067-Sort-with-Swap-0-i.html","f8e033f8302cece41f66ea1edf58ffba"],["/1068-Find-More-Coins.html","2f1b468c3133f91f6eec13fc371584eb"],["/1069-The-Black-Hole-of-Numbers.html","974c8d3eba33b4f685fcb5971efc46ad"],["/1070-Mooncake.html","94205faaa1308c7f28155d4cf442e2e4"],["/1071-Speech-Patterns.html","ad439bcbefed3b92f1f21505a353bf8e"],["/1072-Gas-Station.html","b314bd58aca92230488931568d785b90"],["/1073-Scientific-Notation.html","3f9515ef7a50a80a998f993208e236c4"],["/1074-Reversing-Linked-List.html","a5ee01cce85aae521d6acd22eea23977"],["/1075-PAT-Judge.html","8d931c57bbac7e3a3d9423398c6bc9c3"],["/1076-Forwards-on-Weibo.html","6f80d5f6f9139c1d19f78fb22c9742fd"],["/1077-Kuchiguse.html","65c2b88e0a1d9cffdabb6e199a8274ee"],["/1078-Hashing.html","c15069a1c9e5503c77ca02addfec6a0f"],["/1079-Total-Sales-of-Supply-Chain.html","57bf816cc43fc75d58f90302ed58be9a"],["/1080-Graduate-Admission.html","4ca3621183727f5b4de064c2d1f5ee23"],["/1081-Rational-Sum.html","ae0b2dda00ef854f3dd800655ec0db5f"],["/1082-Read-Number-in-Chinese.html","7f2a2c74e6737b24523ab6939bd0a4b6"],["/1083-List-Grades.html","de2f2458ba7eed8a3436afa62b397a54"],["/1084-Broken-Keyboard.html","b9e34aa83dfd7e7d57e3e8b6005b5a3e"],["/1085-Perfect-Sequence.html","21cb5d38d6751f2eac5b44f3e560c7fe"],["/1086-Tree-Traversals-Again.html","5b1fd105c8e25cc78d4235380bd8228a"],["/1087-All-Roads-Lead-to-Rome.html","713fc7264cd1a7afba95dc5b31ebc754"],["/1088-Rational-Arithmetic.html","ab155445c9fe0c3e633f715fbd2e9726"],["/1089-Insert-or-Merge.html","ec1e798e64702d8d9dee12a0314c30a5"],["/1090-Highest-Price-in-Supply-Chiain.html","54bbdf647f2a15baf0b1b8f93568ba0b"],["/1091-Acute-Stroke.html","51dd5521ee59147959b6c0c4811c7832"],["/1092-To-Buy-or-Not-to-Buy.html","3075204d48b92ac10690b9b4c5dd6b0f"],["/1093-Count-PAT-s.html","82c4eeaf5c87ecd910dbe62392b10afc"],["/1094-The-Largest-Generation.html","a567fee260a80957e540c6411a915ab2"],["/1095-Cars-on-Campus.html","72136431df16d04cfd602343b3c917ae"],["/1096-Consecutive-Factors.html","1fc6dcd78a0579c92967a919abef30d3"],["/1097-Deduplication-on-a-Linked-List.html","e761155e59e8aac736a447b0ddd50757"],["/1098-Insertion-or-Heap-Sort.html","7c0163bc977b97e9f78e3bc73c3c009f"],["/1099-Build-A-Binary-Search-Tree.html","b41fff9a89e2ed7f56fa245904278821"],["/1100-Mars-Numbers.html","f46ab9092043a70665b25fce97c95872"],["/1101-Quick-Sort.html","f7ad38ea6bf69b11ef9442467010faf3"],["/1102-Invert-a-Binary-Tree.html","72583371ee93e84dca0e03b50dfc8a8c"],["/1103-Integer-Factorization.html","981717889309e311854d3e87b5c06606"],["/1104-Sum-of-Number-Segments.html","8f43a4caffbde82b94f3f24fdb5f4a68"],["/1105-Spiral-Matrix.html","5dcfec6ad876c1edab8f418246799292"],["/1106-Lowest-Price-in-Supply-Chain.html","69b5247d4e5640e72b3a68120f4723e2"],["/1107-Social-Clusters.html","cb4159e39046cad4f1ea3497d12036a6"],["/1108-Finding-Average.html","ea40150795f8a5ea8383c0c7de310fd4"],["/1109-Group-Photo.html","c78510624a4ccab5fbe91cc2a4889ccd"],["/1110-Complete-Binary-Tree.html","11646b33eea76691be0181601e736b86"],["/1112-Stucked-Keyboard.html","09398da1c54d76c95afdb950b6b8e30b"],["/1113-Integer-Set-Partition.html","a23cc6f61957cee1c838930623e74a74"],["/1114-Family-Property.html","05c524391d3b5dbe5240d9dc9ca1e500"],["/1115-Counting-Nodes-in-a-BST.html","b9e6d872e2004023d46c284b60031ddf"],["/1116-Come-on-Let-s-C.html","0a04987880b6afe60041f20058af91df"],["/1117-Eddington-Number.html","76c0f9b7985d3b13270823d56c2f1cb5"],["/1118-Birds-in-Forest.html","8520a08a6a40344571973a5c8f3bb81b"],["/1120-Friend-Numbers.html","467ad0b9d711444890c4b6d03a9cfba6"],["/1121-Damn-Single.html","b642e417aa9afa131a4b9858e6eed533"],["/1122-Hamiltonian-Cycle.html","1dd9fc3eea10f63de21fb84792599a29"],["/1124-Raffle-for-Weibo-Followers.html","0ee5f79e05c1f522d6972fda4fce0196"],["/1125-Chain-the-Ropes.html","0a3515704525c64f444f3e7f1e1c0012"],["/1126-Eulerian-Path.html","df1b9bd7ab0d3101a8f94f9623b4c5e9"],["/1128-N-Queens-Puzzle.html","1f5a0adab142ae74c5fed4c37cf8eaa3"],["/1129-Recommendation-System.html","4428c9486a9260082ee2a37e541f86f3"],["/1130-Infix-Expression.html","3060912a665b97b0795e559ff06949da"],["/1132-Cut-Integer.html","943be2e4fb35f9ff479af5789a740672"],["/1133-Splitting-A-Linked-List.html","4c80f5c92cad25e0794ef4a7448c2b13"],["/1134-Vertex-Cover.html","9810df05a9c93abbfc2deb8cbd7228b0"],["/1136-A-Delayed-Palindrome.html","a7b614416bc875f194b95636100167eb"],["/1137-Final-Grading.html","8c7294d737193720472943019fefd89c"],["/1138-Postorder-Traversal.html","d6ec215a0560baae4e1439a19a8b3ab1"],["/1140-Look-and-say-Sequence.html","c2c8493541c056be9b0413efb2868bfc"],["/1141-PAT-Ranking-of-Institutions.html","bb71cf97a3c9294b56a8222045902a43"],["/1142-Maximal-Clique.html","734627913f465f487484e9a566eea6f9"],["/1143-Lowest-Common-Ancestor.html","4a0379e87350e44745d38d2b5df01a63"],["/1144-The-Missing-Number.html","d77967d949c175eb6538e83e2e9dc678"],["/1145-Hashing-Average-Search-Time.html","ef1b536f955433dc479b0e939e2a0e1a"],["/1146-Topological-Order.html","0729cb523e7856dc5c8c82e1f697f8d8"],["/1147-Heaps.html","3b2f80df26a4ace99bc4a4ac2284d52a"],["/1148-Werewolf-Simple-Version.html","34dfedfb9f0396124ccd70dd85bd3515"],["/1149-Dangerous-Goods-Packaging.html","3d0da3e5582b0c18cf2f10597a91baad"],["/1150-Travelling-Salesman-Problem.html","31cfdd34dd0cfcf2fb4e8a3316824dba"],["/1151-LCA-in-a-Binary-Tree.html","3fda3f1bd077c8b5a462f9dc8b7d2eb2"],["/1152-Google-Recruitment.html","f97824e6a17f2a414ee10fed217478a4"],["/1153-Decode-Registration-Card-of-PAT.html","1a43b21ccd054f55de89809f990cc62d"],["/1154-Vertex-Coloring.html","6474a611e649a24f4f20f0d2b1b90577"],["/1155-Heap-Paths.html","27f6a3db99d69ee84fd5b60bf051da08"],["/119-杨辉三角-II.html","47fc4e932e11b9922b808193c9058201"],["/125-验证回文串.html","44dc1e26f709becdf6742bebea534fb9"],["/150-逆波兰表达式求值.html","f1652c98791c874a83e3628dd09490f0"],["/167-两数之和-II-输入有序数组.html","29a28754dd937ee1665ca6720fc2c1c5"],["/183-从不订购的客户.html","56c5ba707d32ae3de641c16cb97666b6"],["/189-旋转数组.html","aee9c2ddf55a93194e62b68e0d51a370"],["/19-删除链表的倒数第N个节点.html","2d59cb1c16f5d11540949b63d31f44f2"],["/2-两数相加.html","56b1ab8b7a2547376f07816bb5aa31c3"],["/234-回文链表.html","9e1e6c3abd5a96dcf1f0bca723d18c6d"],["/283-移动零.html","5087bd6a6d0a9fc60fe0784f5a1de013"],["/3-无重复字符的最长子串.html","1ec82a7edc76aa1e1175b706de86d877"],["/33-搜索旋转排序数组.html","549d802c24255567151b39dd321ea4f7"],["/349-两个数组的交集.html","a5ad59a2ae62cebdedf936be859fc505"],["/350-两个数组的交集-II.html","eee04fd12b566a17264d12e66243ca9f"],["/38-报数.html","5f916e52651a94b282a18c3d0ca61281"],["/394-字符串解码.html","9d5f169a9f762501697cb7db92126972"],["/4-寻找两个有序数组的中位数.html","d97b8530576c3a6c5a16b6a8cbf479e4"],["/404.html","fabda3a7d6951b08634e124cd44efdc8"],["/48-旋转图像.html","13eb24a2e94dc327dfc8f89c863eb9a3"],["/494-目标和.html","90bc34e5f7aa6e644af3d029e0182542"],["/496-下一个更大元素-I.html","f4d03ca66a88ff65041ca6ff0e7bbd69"],["/498-对角线遍历.html","605670aaf504df1554fb0fda39b081c8"],["/54-螺旋矩阵.html","56e0b98e3b98b57a795636b0ddfdfc7a"],["/542-01-矩阵.html","6c851f0c798025f20d13477e10442e7d"],["/557-反转字符串中的单词-III.html","68b6c3b1daccc3eaf15afb527045c90e"],["/58-最后一个单词的长度.html","06c55d8efb6c9517e05c357964b04d15"],["/599-两个列表的最小索引总和.html","8b31847a953e26664c51cbc81099a0f1"],["/66-加一.html","fca94a8a398e7d285ded26e6674c8ddc"],["/707-设计链表.html","5f3aebe74ac798aadc3119bd4e5832d6"],["/724-寻找数组的中心索引.html","62c29574d21016d9daaca5605b678dc6"],["/728-自除数.html","5b585d68a3bb49dc7a61b522dc6c9da4"],["/733-图像渲染.html","046c817e3e71c0f7ae477bfb3eaba62d"],["/747-至少是其他数字两倍的最大数.html","c104d6f0ebb7580bb7830d11de827661"],["/832-翻转图像.html","4fcf5ea7a5c2bc970a69b1ef2983f151"],["/841-钥匙和房间.html","9044d0328c4b881875033a2c231735f4"],["/88-合并两个有序数组.html","a63e67633b7bd67e7da10da77d6be391"],["/884-两句话中的不常见单词.html","07a614f84a390bb25e3681868ecf96c3"],["/906-超级回文数.html","ae64151e1ea0e04f11980ce33817b8b3"],["/94-二叉树的中序遍历.html","04b9cf8b7722dd42f42cd233bc2d7915"],["/Android-Fragment.html","4399423db5174eed7be835d91aef8fea"],["/Chinese-Copywritting-Guidelines.html","54105fc21b3dd6cc06d32620169ca42b"],["/Fixed-Income-Securities-review.html","66337c903a0804c040a5301e4968c230"],["/Font-Suggestion.html","87e4858aa245332e4cee77e98d9a82a5"],["/GUI-Options-Calculator.html","2ffc9545044c61eb39a2eb7dee4ab4db"],["/Information-cascade-with-NN.html","996eaae4641303e9930a7b15fc60df23"],["/KPMG-2020.html","a036301642ba78bf6a161d60429fe067"],["/LeetCode-1217.html","872f110dba36619066582740fffab2d8"],["/LeetCode-1237.html","b8992aa4963503f374b73b268f65403f"],["/LeetCode-1304.html","2d9cfb5c592a627ee89904c193c7c3b1"],["/LeetCode-1313.html","29b7abfe39354c708077df40820e3db1"],["/LeetCode-34.html","e88e880f0554d96e82c3e2c5f13fd03c"],["/LeetCode-347.html","b4cf6b1717a4474ff0023abebda0ad25"],["/LeetCode-367.html","2edd963bb316960523c92c1b77a7f76f"],["/LeetCode-410.html","be4a52b0e7fc30ec3904e6398f4800ea"],["/LeetCode-419.html","3c57d93fc48904101093d46da8b91c01"],["/LeetCode-447.html","aae401e90f366b3d684ec1bbc2bb8543"],["/LeetCode-451.html","a75ccb7ecb89c71f23062e5db85e153a"],["/LeetCode-500.html","00d2404eb1df1d4eac6766c782aa0be2"],["/LeetCode-661.html","9371aebf92f792391a1bcdad8c1fb6a1"],["/LeetCode-697.html","37e3af4380be4a99b2ff7806ddb5e90d"],["/LeetCode-719.html","0bc10ba1751f7651769a697d4eccd314"],["/LeetCode-812.html","29dfdf67e2fe219f0756c82650914091"],["/LeetCode-98.html","687e3d661d13bc6a0630217fb14a262d"],["/Options-Calculator.html","1453a80a5e507a982f0b9ee94b3a693e"],["/PAT-Preface.html","717a7cadfa02199d238418ae3d6c0385"],["/Python-1.html","f5c3348ba96c506d65899e681dce7591"],["/Python-catalog.html","d6f116d58f67d3ba2b1a9e5fac6550a6"],["/Python-study-methods.html","c42217ec8e283f086a0c8a828d8607a1"],["/Python-tutorial.html","a011cd83edae7d1291c4c1c1ebc9c380"],["/SAS-in-2019.html","a2477ba690577879e4859542a615bb0c"],["/ZJUWLAN-login.html","defd3c635d476fd14781cbd071a9ecbe"],["/abandon-qiniu.html","ea2a69aa0dbb1edc8d9554e6ecfb642a"],["/about/index.html","d859c3d4ff78a27052671d9b9a2e3061"],["/anaconda-problems.html","41877b72cc6272fa6aa6d444c1e06afb"],["/arch-latex.html","92581bb97ec834af5581ff26a602f643"],["/arch-linux-clean.html","f52140b7639fdc139b76056dd2de1211"],["/arch-on-Raspberrypi-2.html","3cc49748b481c5403b78bc339497ca7e"],["/arch-on-Raspberrypi.html","676cf53b07ce94936de45f0efece419a"],["/archives/2019/01/index.html","9d7ce41e44a36b33c1fbb01def36efbd"],["/archives/2019/02/index.html","85d10f73d82793ebc3e20ea0c3337064"],["/archives/2019/04/index.html","902e6ec69d410333c9fd81629d8cb301"],["/archives/2019/06/index.html","3266fff00e122c3614ca80e8f087de07"],["/archives/2019/08/index.html","dee987f89e8b1c0bb5286d8473f8c725"],["/archives/2019/08/page/2/index.html","7671aa9fe668eb33078d7241282a26bc"],["/archives/2019/08/page/3/index.html","01e3caa52252bc5f590d118884d94bca"],["/archives/2019/08/page/4/index.html","ee2c6eb0b32c6b129527070ef1698540"],["/archives/2019/08/page/5/index.html","77a65ac4f0ac9de9cfddd8fa9a7476c6"],["/archives/2019/08/page/6/index.html","7c9e0940c48e030917f4265a76c96e2c"],["/archives/2019/08/page/7/index.html","937455d3194f279a9e7d14470d818c26"],["/archives/2019/08/page/8/index.html","73ae2c14f3eab67343f5a99568089e66"],["/archives/2019/08/page/9/index.html","d24abe55a3609a5d761683067976fa19"],["/archives/2019/09/index.html","26d806ca83703e092b81da8a76f95a8b"],["/archives/2019/09/page/2/index.html","defd7c1dc528180ecaa8e52460baaa46"],["/archives/2019/09/page/3/index.html","adf81c416f84429cbcdf1b4fc7bc979b"],["/archives/2019/09/page/4/index.html","2fd30bea6c48e7116d85bc3b2dcb8e64"],["/archives/2019/09/page/5/index.html","d391bf2ed654a14019c114614e1411f4"],["/archives/2019/09/page/6/index.html","3f2e612306975587636f6cd36487256a"],["/archives/2019/10/index.html","27d3df8f2026f4618efd4c9fe06923d4"],["/archives/2019/11/index.html","d59f59e8311cd8e9e46d46b03e7edb98"],["/archives/2019/12/index.html","550430335640a085e2c4a3be9c32c9de"],["/archives/2019/index.html","0407f5f9d0f95553565d30810885a8f0"],["/archives/2019/page/10/index.html","e5d9b9d8c2cdd7d21c07d78e7fedb7dc"],["/archives/2019/page/11/index.html","8142a6bf7bdeee39759b4f8a04ab334d"],["/archives/2019/page/12/index.html","7d6ced81a255fc88dae24f991e191788"],["/archives/2019/page/13/index.html","b98a040164108f88faa1faa964c7c41d"],["/archives/2019/page/14/index.html","00cad66d7161a4f10ae0f04e5a85cc89"],["/archives/2019/page/15/index.html","28fe6775d3da0fea1ef1c4f616d9c484"],["/archives/2019/page/2/index.html","8f4aa643331b6c9a7410329088553b96"],["/archives/2019/page/3/index.html","ec3c127b4b3440ebcf5b2e4808647b13"],["/archives/2019/page/4/index.html","82ef4c947a492430b7151ba5a66d5314"],["/archives/2019/page/5/index.html","e00985b400047c5c311137b3182ea211"],["/archives/2019/page/6/index.html","6089bdb69dffcffef15447c24d7f30a2"],["/archives/2019/page/7/index.html","2e719f36c37edb7edf5d5bd9ba0911d6"],["/archives/2019/page/8/index.html","a6ed4f7469fe306ecf04358c1f94763e"],["/archives/2019/page/9/index.html","93af381e7923b22bc0a377822131f4ab"],["/archives/2020/01/index.html","f456b15b637f0be804cf24b7d34de5cd"],["/archives/2020/02/index.html","8db81a9b4cebed545384aa00440a2b30"],["/archives/2020/index.html","f77c0ff95d62410ad589d5e793890fe8"],["/archives/2020/page/2/index.html","6f999292ddfc623c41103f267095f435"],["/archives/index.html","973df48ad0a93e631889c4b93724044c"],["/archives/page/10/index.html","f7b01579a3dbc3a5f0b3f3a9ba1bbec1"],["/archives/page/11/index.html","90215ec3331d189847f3e3387f25a360"],["/archives/page/12/index.html","6308b037e387aaa0e60859678699020e"],["/archives/page/13/index.html","78cf3f8f8196c4ce27a9f37550cf7e4a"],["/archives/page/14/index.html","072ef6e6a1841600451027348b2865c8"],["/archives/page/15/index.html","355e5bbdc0b807ad27568536e438ca06"],["/archives/page/16/index.html","3042a2c447a9c94fe2d3bc6129cab5fd"],["/archives/page/17/index.html","1917650104886fd343d7ac1b67eca8c6"],["/archives/page/2/index.html","514661e1083f6185bd2eb22c3e19c775"],["/archives/page/3/index.html","98e9b689260b8bc80ee5998efa4b1f73"],["/archives/page/4/index.html","bcbd0709b1d86cded18c8cec7efaea41"],["/archives/page/5/index.html","1b994e3d039cafcf731ba8e1b5abe064"],["/archives/page/6/index.html","91edb7b08b87a8469f521c979b596937"],["/archives/page/7/index.html","db1150302f1b48d3629ab8949e47241f"],["/archives/page/8/index.html","2ff292e568f7e7471536b316beb2cdb1"],["/archives/page/9/index.html","50d22b2675d527c062fbe3d6e97d3cb0"],["/asset-pricing-review.html","21eed2cf670f99d251fce4d47913d6d7"],["/categories/Android/index.html","c3049b8fee970586b63cf443089acbd6"],["/categories/Jupyter-Noterbook/index.html","c37724d5e163dd399821e073bf42d2cf"],["/categories/LaTex-系列教程/index.html","b95481fec2a8f130994134993fa4b8c7"],["/categories/LeetCode/index.html","5ec1629affd19d89d77e2b6194330d12"],["/categories/LeetCode/page/2/index.html","c8abc4d23c9230a001c0af9c7dcd6056"],["/categories/LeetCode/page/3/index.html","35f4515acc4fbd7f7ae9b9556e57a24f"],["/categories/LeetCode/page/4/index.html","89ca1b314d5dabf353a1f702a7982972"],["/categories/Linux/index.html","8d6d566f45ccb4e92073ceff2f477442"],["/categories/PAT/index.html","f3dec31e076ad0741413f1a264d4f66b"],["/categories/PAT/page/10/index.html","15e5c55b6b131b7ed63deb812581218e"],["/categories/PAT/page/2/index.html","6ba44dd5069195665b3371bdbe6935cd"],["/categories/PAT/page/3/index.html","5cfab8735a4405d9250706d3f06a716b"],["/categories/PAT/page/4/index.html","c3a324fca145ebdb49474474307fd219"],["/categories/PAT/page/5/index.html","cb02716dc084e188546e4441a7ffc18f"],["/categories/PAT/page/6/index.html","59bff4dcf3078015ff6135f1684639f2"],["/categories/PAT/page/7/index.html","c5e88b78c15f60c759a8fea8ae9b00a1"],["/categories/PAT/page/8/index.html","2e4b737c441affe29cbfbb89b59a3ed2"],["/categories/PAT/page/9/index.html","8077c735d52eaf1eab35b5273f76e8ce"],["/categories/Python-教程/index.html","a8a30f37d90c55e061ded6848eb3e6aa"],["/categories/Python/index.html","13dd45c959dff97d10d19338ec64dfd0"],["/categories/SAS/index.html","5fe3019820f3be7186e757f311381f87"],["/categories/index.html","fe6b94a35c504b5f691066801987bcc1"],["/categories/前端/index.html","ea823b423bb866622bbd0a89e2aa1843"],["/categories/博客/index.html","58a3305807207715bf0a9353249d1443"],["/categories/字体/index.html","ad125722f7763b42fe9f8b288f323486"],["/categories/新生/index.html","8c999f62cd0b3b508fba734f77f14f81"],["/categories/树莓派/index.html","22584cbed7cbfb6f9e8408978c77cee6"],["/categories/网络/index.html","af266d97b8cd6885aee0559ae4981f4b"],["/categories/计算机视觉/index.html","161cabd422ed299c3025c0d163f1b0c0"],["/categories/金融/index.html","cc1b48fc01db08bec36d56982d3954f6"],["/choosetutor.html","50154cf81309e7bd1db4842cd18f4973"],["/css/index.css","dd0340d3e1ffc0e019c1ff39e5b636a6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/deepcopy-vs-swallowcopy.html","b844c958befee6c2f6ad97bd9a320b9b"],["/econometrics-review.html","67208c36166ebd055ad7e60a163e977c"],["/economy-college-interview.html","4699e47c427ed6629a7f9cf8ae794db8"],["/economy-computer.html","0222912d0f841e541e37dc8b242bcfbd"],["/images/pwaicons/192.png","6349905c8b10139b0e22587246e45714"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/pwa/16.png","333887eb35525520fbb21f7420e8746a"],["/img/pwa/32.png","fc33024c16407d10d7cb3c632314f689"],["/img/pwa/apple-touch-icon.png","fc33024c16407d10d7cb3c632314f689"],["/img/red_shark.webp","d41d8cd98f00b204e9800998ecf8427e"],["/index.html","c84918b7756af4b58b5aea98af74bbf1"],["/international-trade.html","654b171477b1b0fff8deb33cec42f71d"],["/investor-sentiment-ans-bond-risk-premia-in-SAS.html","4494eded8fd46ab0f8015539f5bb254b"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/jsDelivr.html","7bdadfe8f6a656b99f3478465845782e"],["/jupyter-notebook-tips.html","bca84577b17f34354366239dbb0e61cd"],["/leetcode-preface.html","bf10c00971fb24ffa07ed0c1222eed78"],["/link/index.html","6b7ed32282ecebf8328c876af8963f4a"],["/nowadays.html","0ebff4ff228f4ccf95411f2f0bdb2123"],["/option-price.html","3b4e6d8d6e0d708559160231f02fe0ab"],["/page/10/index.html","1b6583999586bbc34f78f4681f175690"],["/page/11/index.html","cc586088d7deb3f702fd68542fcb0b72"],["/page/12/index.html","72f37a01426b2b4400b9c8a008bbfd5e"],["/page/13/index.html","04b4c1e709add09d0760ce1998656b77"],["/page/14/index.html","a48ec4a63bbbf01d4cae21db157653d7"],["/page/15/index.html","f74799b0c61f200a6e528c2f654dc020"],["/page/16/index.html","acbcb879f286083b218d0edf2d1147fd"],["/page/17/index.html","b3ab0d3636170a74de9c6ebfaec40fe5"],["/page/18/index.html","3a8287c431dfcad401ec8806d9e98347"],["/page/19/index.html","f7a48f41082e577af0c86092ad44f774"],["/page/2/index.html","c49b6c73a0ce2298f04e15f6ed35be2c"],["/page/20/index.html","c0239d830d7336b7885ec617bb5598c5"],["/page/21/index.html","365f3ad36e957535da6161b58dee2a18"],["/page/22/index.html","8a5a9e16e3f9934e53c46411fa8d3423"],["/page/23/index.html","5656e1b3f5b1e0140770e3629c516c6f"],["/page/24/index.html","97aaf9629fcb17e13330cba1a7add28a"],["/page/25/index.html","3188880581aa497fef45c41765db344d"],["/page/3/index.html","3d320d4128571d849b2a39822061c844"],["/page/4/index.html","0ebefdd38477a9cac25e42ccbdc2e185"],["/page/5/index.html","9e9be24e28c3f9a0a723676ff7e58781"],["/page/6/index.html","a44e39233829664f9aeab4b2d287f5c1"],["/page/7/index.html","7dd6274c63425f8f7043a9fdca030b27"],["/page/8/index.html","1dcbaf0571a31d6e15fdf27e01495db1"],["/page/9/index.html","f31a0490ea7a0b94c598a955bb081c3c"],["/sas-result.html","51f972038b1588b8f08fdbbb32297008"],["/social-science-major.html","92c1f34183592aa1800c86123cf5f091"],["/tags/01背包/index.html","7b4a572072b1f4fbace412c3b41c62ec"],["/tags/Anaconda/index.html","808d66ae487037c97853367496fe683f"],["/tags/Android/index.html","122d959ff2b60277badc7cdcb5db4da9"],["/tags/Arch/index.html","016108fa4f3d55981e04a24a0e5bd46b"],["/tags/BFS/index.html","85e33ed469a26527395ab4bc360c36d6"],["/tags/BST/index.html","7e75680f3e5ae4f6352ead29c6910093"],["/tags/CV/index.html","3e039f9ea7d380a4061937c379a24eec"],["/tags/DFS/index.html","728dc859ccd2eab9a01cdd1bbdc38017"],["/tags/DFS/page/2/index.html","04278a27a469d548f0c6fcf9605d76b5"],["/tags/Dijkstra/index.html","81175aebe38082209b24d0b977c86924"],["/tags/Jupyer-Notebook/index.html","8fd4dc11e5f61b89259f33894f455ffe"],["/tags/LaTex/index.html","71a65b46b284a26998f111c8796eb27d"],["/tags/LeetCode/index.html","2ea654a4368b91f7062d942ea4236f38"],["/tags/LeetCode/page/2/index.html","baada18c40a7df7c18af1b7f69f67c1a"],["/tags/LeetCode/page/3/index.html","413bc0296c78291f4ef163f38adfc495"],["/tags/LeetCode/page/4/index.html","83096b766d5bc72bed0d1e55716f8ee2"],["/tags/Linux/index.html","ea87b0cda81bc646d26d5474008ccb0f"],["/tags/PAT/index.html","920e3020574c98f1caee13e663a9fa63"],["/tags/PAT/page/10/index.html","1d7f3aec940b164bf14e3ed45f78cbc1"],["/tags/PAT/page/2/index.html","92d158b5690a86c13ef6cc22ad935003"],["/tags/PAT/page/3/index.html","c967f775fc98f1a992a6d2257420076d"],["/tags/PAT/page/4/index.html","96bccf1b01f30fe6bdf84698168bb1b4"],["/tags/PAT/page/5/index.html","8f75c8c2f9afb12bbb1ad9d07fac180e"],["/tags/PAT/page/6/index.html","53f139159890e519529adb34d11957b0"],["/tags/PAT/page/7/index.html","9edf9c357a6f6ae792b704c3678f6600"],["/tags/PAT/page/8/index.html","c053b6f9c5d5348eb5819652ecbb1e85"],["/tags/PAT/page/9/index.html","97f5dfc1ba821d32e459f68f909f603f"],["/tags/PyPI/index.html","dc875cdb42c95de7ed36e7f1fd58f0de"],["/tags/Python/index.html","17489d9ddaec2a8cabb0278864a6c62d"],["/tags/Qt/index.html","2edab84bff3c84169bd037539f5e6f10"],["/tags/RNN/index.html","2a45fd3e5d438d18d88e2083bf75c550"],["/tags/SAS/index.html","bb799ae36ce58c6d2dcc357e0354af09"],["/tags/SQL/index.html","73b91c78c5eb9c7719c7cc67c3ab19ca"],["/tags/conda/index.html","55b6555fc6aede73db0e81ecafc5173a"],["/tags/index.html","f0c62bcc9bc421f0c46a10ff949ed2f7"],["/tags/jsDelivr/index.html","246d5431528a0e3549c43de580b5b1de"],["/tags/七牛/index.html","64f319fae7f5bd0c42338d8f8b24f4df"],["/tags/二分查找/index.html","f1a6226b446b472ea3a73fe313d8e504"],["/tags/二叉搜索树/index.html","1859b8a05ce73c069d9f09ec4389d3f6"],["/tags/前端/index.html","c86df046bdcfb324edbb863eaf7ea483"],["/tags/动态规划/index.html","2e236af69b96ca9a8f23194a8e617287"],["/tags/双指针/index.html","c81808fb07c78a4ee2eaac72064e40c2"],["/tags/哈希表/index.html","c1323b44bbdd5bf928b4bb84a9e9ad14"],["/tags/哈希表/page/2/index.html","c5bb68da0c9173b3195d0c0ed140333e"],["/tags/哈希集/index.html","0f4f50ca89015e0c3f712d8f652b4f0c"],["/tags/哈希集合/index.html","df541283533bb4f181551aad1e848c4d"],["/tags/固定收益证券/index.html","e92c57ea2b8055570b0710c5845450dd"],["/tags/国际财务管理/index.html","ed253a9cc998f70f80696eb18323e531"],["/tags/图床/index.html","5d0117f33ca1dcc8209787f4c86156c1"],["/tags/字体/index.html","02c34c7d2c68e5882488654c03dd47a4"],["/tags/字符串/index.html","02f01043a02d817f8ea68e17e1ad57cb"],["/tags/字符串/page/2/index.html","cd8415e035709b8704d92af63838e58a"],["/tags/小Tips/index.html","5e06195edbd1a09937fedafdc76f5091"],["/tags/并查集/index.html","e4f1572d751ffae00b929a32a2c36a78"],["/tags/广度优先搜索/index.html","375d36dc761ca53b9ba9ebd3d5ea29da"],["/tags/序言/index.html","c3265befc1cb2734e6b6cb2e93d93f34"],["/tags/感知器算法/index.html","96bfb849daf8a9e3904e1b6dd49a4499"],["/tags/排序/index.html","b9448c3a4196fc02bd3d173ab786a6a6"],["/tags/教务网/index.html","d0fdf15a6a7106de3d161f3ce641dc72"],["/tags/数据科学/index.html","4d99fcf0ebfd805131da237105598650"],["/tags/新生/index.html","0719578ce1ff631fdce10251b5b5110f"],["/tags/期权/index.html","b4d689c656cf2c2809e686e802927964"],["/tags/栈/index.html","eb02035e23492bb915e9c57e36ff73b9"],["/tags/树/index.html","74f6f81b8e6d395e0b57864118f550b4"],["/tags/树莓派/index.html","7014fa7c9f37e711fe67f97622e14a41"],["/tags/桶排/index.html","b4748749bc01ab6e5ee2e16fcfd381ab"],["/tags/毕马威/index.html","0995fd756f3b33e4fb31f1ae9c6e2cf6"],["/tags/浅拷贝/index.html","ca35d551827120cec88729fdabb4ff6f"],["/tags/深度优先搜索/index.html","bc3f9a77edce7d3a0a93e2e431cb4f11"],["/tags/深度学习/index.html","ce7120e1ef972994540e0800c0e70e31"],["/tags/深拷贝/index.html","a62e08b9b17ffc2bbcd4838d7190c346"],["/tags/牛顿法/index.html","76d708637906ac94ae15a1a77cd9d5ff"],["/tags/目标检测/index.html","ec62b11da6e01c0f5bded21356a0b6a5"],["/tags/神经网络/index.html","fd1457760d85027f12438934b6d370de"],["/tags/网络/index.html","b8715d26f5aba1bf30b945cb045bfc67"],["/tags/行为金融/index.html","6d1d5d8ed8fa98c2a836ac0c08ca8aa5"],["/tags/计算机视觉/index.html","b2a177294bd4706e85f5803c90e8896d"],["/tags/计量经济学/index.html","8946171c7523ec168e7bae39e1d743e7"],["/tags/贪心算法/index.html","26fa88bdc6d484dbce9d64a8ca87e4d9"],["/tags/资产定价/index.html","f978b7772c92f5c2ddb7481d6191eede"],["/tags/金融/index.html","29648b024321143a6cd4350c265e1b08"],["/tags/链表/index.html","7ab35b3ba44fb8dac5fba6eac6588a5a"],["/tags/题解/index.html","4e90fa6db3eb6051c572c58712611541"],["/tags/题解/page/10/index.html","a5bf22bcf5e15d0ade4472c3ceabee56"],["/tags/题解/page/11/index.html","a691d23b8a0be019e69743b7eb327388"],["/tags/题解/page/12/index.html","a7997fb3bad0edf6fbfb29d54fffb8eb"],["/tags/题解/page/13/index.html","f5a4dd5f352c7cede6acf9ab448e454c"],["/tags/题解/page/14/index.html","533148c2badbdb15b0a8cf309938ba1c"],["/tags/题解/page/2/index.html","5e27294c6ecd749da60ed19d00f530ee"],["/tags/题解/page/3/index.html","8a1aa9dd76d96458506b69f33f0776f0"],["/tags/题解/page/4/index.html","9859b76941b1433414d27393d83234ab"],["/tags/题解/page/5/index.html","714029dc599ab9297c2098e3f4000fac"],["/tags/题解/page/6/index.html","00a88069000a5237c2adbd8f608c67a1"],["/tags/题解/page/7/index.html","bf69b1d17e72c2b0014f7dff786dd30b"],["/tags/题解/page/8/index.html","6368471dcae96f5b243f7f50fc6f7984"],["/tags/题解/page/9/index.html","774c5b9a5676ac0b2e722fb9a50d21e8"],["/threeone.html","150e155d4d1d79ad0662acf87288b5c9"],["/upload-to-pypi.html","d71c35f5847467a9e95ab84299a3a0cd"],["/win10-1903-network.html","41a34fa43e3301695412f885cdd6b710"]];
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




