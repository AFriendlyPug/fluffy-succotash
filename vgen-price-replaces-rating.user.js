// ==UserScript==
// @name         VGen: Price Replaces Rating
// @namespace    https://vgen.co/
// @version      1.3
// @description  Replaces the star rating on VGen service cards with the (discounted) starting price
// @match        https://vgen.co/*
// @run-at       document-start
// @grant        none
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF83M18zMTM2KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNzYxMiA3Ljc0MTU4QzE3Ljg5NDMgNS42NjgxIDE0LjY5OTkgNS41MDA2OCAxMi42MjY0IDcuMzY3NjRDMTAuNTUzIDkuMjM0NjIgMTAuMzg1NSAxMi40MjkgMTIuMjUyNSAxNC41MDI0TDEzLjM3OTMgMTUuNzUzOUMxMy40NzYxIDE1Ljg2MTQgMTMuNTc4MyAxNS45NjEzIDEzLjY4NSAxNi4wNTM0QzEzLjIwMTIgMTYuMzMzMyAxMi44MzYgMTYuNDMzMiAxMi41OTEzIDE2LjQzMzJDMTIuMjUwNiAxNi40MzMyIDExLjY2NjIgMTYuMjQ1NCAxMC44NDU2IDE1LjY5NDlDMTAuMDYzOSAxNS4xNzA0IDkuMjQ5ODMgMTQuNDQwOCA4LjQ5MTQ2IDEzLjY2NDNDNy43NDAwNyAxMi44OTQ4IDcuMDgxNjQgMTIuMTE5IDYuNjA5MDYgMTEuNTMyMkM2LjM3Mzc5IDExLjI0IDYuMTg2OTcgMTAuOTk3NiA2LjA2MDM4IDEwLjgzMDJDNS45OTcxMyAxMC43NDY2IDUuOTQ5MDcgMTAuNjgxOSA1LjkxNzY0IDEwLjYzOTJDNS45MDE5MiAxMC42MTc5IDUuODkwMzkgMTAuNjAyMSA1Ljg4MzIxIDEwLjU5MjNMNS44NzQ5NiAxMC41ODA5QzUuMzMxNjIgOS44MjY0OCA0LjI3OTE4IDkuNjU0NDkgMy41MjQ0OCAxMC4xOTc2QzIuNzY5NTYgMTAuNzQwOCAyLjU5ODMzIDExLjc5MzcgMy4xNDE1NSAxMi41NDg2TDMuMTYwMTcgMTIuNTc0M0MzLjE3MTA0IDEyLjU4OTIgMy4xODYzOSAxMi42MTAyIDMuMjA2MDQgMTIuNjM2OUMzLjI0NTMzIDEyLjY5MDIgMy4zMDE4NSAxMi43NjYzIDMuMzc0MTEgMTIuODYxOEMzLjUxODU0IDEzLjA1MjggMy43MjY0MiAxMy4zMjI0IDMuOTg1ODIgMTMuNjQ0NUM0LjUwMjU4IDE0LjI4NjMgNS4yMzM0OCAxNS4xNDg3IDYuMDgxODcgMTYuMDE3NEM2LjkyMzMgMTYuODc5IDcuOTE5NTggMTcuNzg3NiA4Ljk2OTIxIDE4LjQ5MThDOS45Nzk5NSAxOS4xNjk5IDExLjI0OCAxOS44MDEyIDEyLjU5MTMgMTkuODAxMkMxMy45NTIzIDE5LjgwMTIgMTUuMTg3OCAxOS4xNTYxIDE2LjE1NDQgMTguNDU5NUMxNy4xNTE2IDE3Ljc0MSAxOC4wNjggMTYuODE3NyAxOC44MjcyIDE1Ljk0ODhDMTkuNTkzNSAxNS4wNzE5IDIwLjI0MDkgMTQuMjAyNCAyMC42OTQ4IDEzLjU1NjNDMjAuOTIyNyAxMy4yMzE4IDIxLjEwNDMgMTIuOTYgMjEuMjMwMyAxMi43NjcyQzIxLjI5MzQgMTIuNjcwOCAyMS4zNDI2IDEyLjU5MzggMjEuMzc3IDEyLjUzOTdDMjEuMzk0MSAxMi41MTI2IDIxLjQwNzYgMTIuNDkxMiAyMS40MTcyIDEyLjQ3NThMMjEuNDM0MiAxMi40NDg1QzIxLjU5NjkgMTIuMTg0NyAyMS42NzggMTEuODkzNiAyMS42ODQ3IDExLjYwNDZDMjEuNzE3NSAxMC41MTk2IDIxLjAzMzggOS4xMjI4MSAxOS45ODY2IDcuOTkxODZMMTkuNzYxMiA3Ljc0MTU4Wk0xNy4yNTgzIDkuOTk1MTlDMTYuNjM2IDkuMzA0MDUgMTUuNTcxMiA5LjI0ODI0IDE0Ljg4IDkuODcwNTZDMTQuMTg4OSAxMC40OTI5IDE0LjEzMzEgMTEuNTU3NyAxNC43NTU0IDEyLjI0ODhMMTYuMjc2NSAxMy43NDk0TDE2LjI5MSAxMy43MzI4QzE2LjkxODkgMTMuMDE0MSAxNy40NjUyIDEyLjI4ODggMTcuODY4NiAxMS43MTk3QzE4LjExMDMgMTEuMTc1OCAxNy44OTI2IDEwLjY5OTcgMTcuNDgzNyAxMC4yNDU1TDE3LjI1ODMgOS45OTUxOVoiIGZpbGw9IiNCOEZGMjYiLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9kXzczXzMxMzYpIj4KPHBhdGggZD0iTTExLjY5MjQgNS44MDMzOEMxNC41MDQgMy41MTg2MyAxOC42NDQgMy44MTcwNCAyMS4wOTU3IDYuNTM5N0wyMS4zMDQ3IDYuNzcxMTVMMjEuNTI3MyA3LjAyMTE1QzIyLjYzIDguMjk4NTIgMjMuNTMwMiAxMC4wMTQ2IDIzLjQ4MDQgMTEuNjU4OEwyMy40Nzk1IDExLjY1NzlDMjMuNDYzNyAxMi4yNTMyIDIzLjI5NTMgMTIuODUyMyAyMi45NjI5IDEzLjM5MTNMMjIuOTU5OSAxMy4zOTcxTDIyLjk0MjQgMTMuNDI0NUwyMi45Mzk0IDEzLjQyODRMMjIuODk0NSAxMy41MDE2TDIyLjczNDQgMTMuNzQ5N0MyMi42NjY2IDEzLjg1MzMgMjIuNTg0NSAxMy45Nzc4IDIyLjQ4OTIgMTQuMTE4OEwyMi4xNjUgMTQuNTg4NUMyMS43NDcxIDE1LjE4MzUgMjEuMTY4OSAxNS45NjUxIDIwLjQ4MTQgMTYuNzc5OUwyMC4xNzk3IDE3LjEzMDVDMTkuNDc0NyAxNy45MzczIDE4LjYwNyAxOC44MyAxNy42Mjk5IDE5LjU5NjNMMTcuMjA1MSAxOS45MTY3QzE2LjExNjkgMjAuNzAwOCAxNC41MDYzIDIxLjU5NzIgMTIuNTkxOCAyMS41OTczQzEwLjk0ODYgMjEuNTk3MyA5LjQ5MjYzIDIwLjkzMzQgOC40MDkxNSAyMC4yNjcyTDcuOTY4NzIgMTkuOTgzMUM2LjkyNTQ1IDE5LjI4MzEgNS45NTc2MSAxOC40Mjc1IDUuMTM4NjUgMTcuNjE2OUw0Ljc5Njg1IDE3LjI3MjFDNC4xMjE2OSAxNi41ODA4IDMuNTE5NzkgMTUuODk3IDMuMDMzMTggMTUuMzE1MUwyLjU4Njg5IDE0Ljc3MTJDMi40NTA4NyAxNC42MDIyIDIuMzI3NyAxNC40NDY5IDIuMjE5NyAxNC4zMDgzTDEuOTQxMzggMTMuOTQ1TDEuNzU5NzQgMTMuNzAyOEMxLjczNzg1IDEzLjY3MzEgMS43MjA2NyAxMy42NDg5IDEuNzA3OTggMTMuNjMxNUwxLjcwNjAzIDEzLjYyODZMMS42ODc0NyAxMy42MDIyTDEuNjgzNTcgMTMuNTk3M0MwLjU2MTY2NSAxMi4wMzc5IDAuOTE0NzUyIDkuODYzMDIgMi40NzU1NiA4LjczOTlMMi42MjMwMiA4LjYzODM0QzQuMTcwNDQgNy42Mzk2NSA2LjI0NTcxIDguMDIxMzMgNy4zMzI5OCA5LjUzMDkySDcuMzMyMDFMNy4zMzU5MSA5LjUzNThMNy4zNjMyNiA5LjU3Mzg4SDcuMzY0MjNDNy4zOTE1NyA5LjYxMDk4IDcuNDM0OSA5LjY2OTcxIDcuNDkzMTQgOS43NDY3NEw4LjAwNzc5IDEwLjQwNTlMOC4zNzU5NSAxMC44NTMyQzguNjE4OTUgMTEuMTQzNyA4Ljg5MzcxIDExLjQ2MDIgOS4xOTA0IDExLjc4NThDOC45ODg3MyA5LjY5NzY0IDkuNzQ2MDggNy41NDQzOCAxMS40MjQ4IDYuMDMyODdMMTEuNjkyNCA1LjgwMzM4Wk0xOS43NjE3IDcuNzQxODVDMTcuODk0NyA1LjY2ODM4IDE0LjY5OTQgNS41MDA4NyAxMi42MjYgNy4zNjc4M0MxMC41NTI4IDkuMjM0ODYgMTAuMzg2IDEyLjQyOTMgMTIuMjUyOSAxNC41MDI2TDEzLjM3ODkgMTUuNzUzNkMxMy40NzU2IDE1Ljg2MSAxMy41Nzc5IDE1Ljk2MTMgMTMuNjg0NSAxNi4wNTM0QzEzLjIwMTIgMTYuMzMyOSAxMi44MzY0IDE2LjQzMzEgMTIuNTkxOCAxNi40MzMzQzEyLjI1MTEgMTYuNDMzMyAxMS42NjYyIDE2LjI0NTUgMTAuODQ1NyAxNS42OTVDMTAuMDY0IDE1LjE3MDYgOS4yNDk1NCAxNC40NDEyIDguNDkxMTkgMTMuNjY0N0M3LjczOTc5IDEyLjg5NTMgNy4wODE5MyAxMi4xMTg4IDYuNjA5MzUgMTEuNTMxOUM2LjM3NDI2IDExLjIzOTkgNi4xODcxMSAxMC45OTgxIDYuMDYwNTIgMTAuODMwN0M1Ljk5NzM4IDEwLjc0NzIgNS45NDkzNyAxMC42ODIgNS45MTc5NCAxMC42MzkzQzUuOTAyMjMgMTAuNjE4IDUuODg5OTYgMTAuNjAyMyA1Ljg4Mjc5IDEwLjU5MjRMNS44NzQ5NyAxMC41ODA3QzUuMzMxNjEgOS44MjY0MSA0LjI3OTA3IDkuNjU0ODUgMy41MjQzOSAxMC4xOTc5QzIuNzY5NjcgMTAuNzQxMiAyLjU5ODQ0IDExLjc5MzcgMy4xNDE1OCAxMi41NDg1TDMuMTYwMTMgMTIuNTczOUMzLjE3MSAxMi41ODg4IDMuMTg2MzggMTIuNjEwNyAzLjIwNjAzIDEyLjYzNzRDMy4yNDUzMSAxMi42OTA3IDMuMzAxODcgMTIuNzY2NiAzLjM3NCAxMi44NjJDMy41MTg0MiAxMy4wNTI5IDMuNzI2OTIgMTMuMzIyMSAzLjk4NjMgMTMuNjQ0MkM0LjUwMzA2IDE0LjI4NTkgNS4yMzM2NCAxNS4xNDg1IDYuMDgyMDEgMTYuMDE3MkM2LjkyMzM1IDE2Ljg3ODggNy45MTkyIDE3Ljc4NzcgOC45Njg3MiAxOC40OTE5QzkuOTc5NDcgMTkuMTY5OSAxMS4yNDg0IDE5LjgwMTQgMTIuNTkxOCAxOS44MDE0QzEzLjk1MjYgMTkuODAxMyAxNS4xODc4IDE5LjE1NjEgMTYuMTU0MyAxOC40NTk2QzE3LjE1MTQgMTcuNzQxMSAxOC4wNjc5IDE2LjgxNzggMTguODI3MSAxNS45NDg5QzE5LjU5MzMgMTUuMDcyIDIwLjI0MDUgMTQuMjAyNCAyMC42OTQzIDEzLjU1NjNDMjAuOTIyMyAxMy4yMzE4IDIxLjEwNDUgMTIuOTYgMjEuMjMwNCAxMi43NjcyQzIxLjI5MzUgMTIuNjcwOCAyMS4zNDI2IDEyLjU5MzkgMjEuMzc2OSAxMi41Mzk3QzIxLjM5MzkgMTIuNTEyOCAyMS40MDc0IDEyLjQ5MTUgMjEuNDE3IDEyLjQ3NjJMMjEuNDM0NSAxMi40NDg5QzIxLjU5NzIgMTIuMTg1MSAyMS42Nzc5IDExLjg5MzEgMjEuNjg0NSAxMS42MDQyQzIxLjcxNzIgMTAuNTE5MiAyMS4wMzM0IDkuMTIyNjUgMTkuOTg2MyA3Ljk5MTg1TDE5Ljc2MTcgNy43NDE4NVpNMTQuODc5OSA5Ljg3MDc2QzE1LjU3MSA5LjI0ODQ0IDE2LjYzNjQgOS4zMDM2NSAxNy4yNTg4IDkuOTk0NzhMMTcuNDgzNCAxMC4yNDU4QzE3Ljg5MjIgMTAuNjk5OCAxOC4xMTA1IDExLjE3NTcgMTcuODY5MSAxMS43MTk0QzE3LjQ2NTcgMTIuMjg4NCAxNi45MTkgMTMuMDE0NCAxNi4yOTEgMTMuNzMzMUwxNi4yNzYzIDEzLjc0OTdMMTQuNzU1OCAxMi4yNDg3QzE0LjEzMzYgMTEuNTU3NiAxNC4xODg5IDEwLjQ5MzEgMTQuODc5OSA5Ljg3MDc2WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMl9kXzczXzMxMzYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC45MzcxIDYuNjcxNkMxNy4wNzAxIDQuNTk4MTIgMTMuODc1NyA0LjQzMDcgMTEuODAyMiA2LjI5NzY2QzkuNzI4NzYgOC4xNjQ2NCA5LjU2MTM0IDExLjM1OSAxMS40MjgzIDEzLjQzMjVMMTIuNTU1MSAxNC42ODM5QzEyLjY1MTkgMTQuNzkxNSAxMi43NTQxIDE0Ljg5MTMgMTIuODYwOCAxNC45ODM0QzEyLjM3NyAxNS4yNjMzIDEyLjAxMTggMTUuMzYzMiAxMS43NjcxIDE1LjM2MzJDMTEuNDI2NCAxNS4zNjMyIDEwLjg0MiAxNS4xNzU0IDEwLjAyMTQgMTQuNjI0OUM5LjIzOTY4IDE0LjEwMDUgOC40MjU2NCAxMy4zNzA4IDcuNjY3MjcgMTIuNTk0M0M2LjkxNTg4IDExLjgyNDkgNi4yNTc0NSAxMS4wNDkxIDUuNzg0ODggMTAuNDYyMkM1LjU0OTYgMTAuMTcgNS4zNjI3OCA5LjkyNzY0IDUuMjM2MTkgOS43NjAyN0M1LjE3Mjk0IDkuNjc2NjMgNS4xMjQ4OCA5LjYxMTkgNS4wOTM0NSA5LjU2OTI0QzUuMDc3NzQgOS41NDc5MyA1LjA2NjIgOS41MzIxNSA1LjA1OTAzIDkuNTIyMjdMNS4wNTA3NyA5LjUxMDg5QzQuNTA3NDMgOC43NTY1MSAzLjQ1NSA4LjU4NDUyIDIuNzAwMjkgOS4xMjc2QzEuOTQ1MzcgOS42NzA4MSAxLjc3NDE0IDEwLjcyMzcgMi4zMTczNiAxMS40Nzg2TDIuMzM1OTggMTEuNTA0M0MyLjM0Njg1IDExLjUxOTIgMi4zNjIyIDExLjU0MDIgMi4zODE4NSAxMS41NjY5QzIuNDIxMTQgMTEuNjIwMiAyLjQ3NzY2IDExLjY5NjMgMi41NDk5MyAxMS43OTE5QzIuNjk0MzUgMTEuOTgyOCAyLjkwMjI0IDEyLjI1MjQgMy4xNjE2MyAxMi41NzQ1QzMuNjc4MzkgMTMuMjE2MyA0LjQwOTI5IDE0LjA3ODcgNS4yNTc2OCAxNC45NDc0QzYuMDk5MTEgMTUuODA5IDcuMDk1MzkgMTYuNzE3NiA4LjE0NTAyIDE3LjQyMThDOS4xNTU3NiAxOC4wOTk5IDEwLjQyMzggMTguNzMxMiAxMS43NjcxIDE4LjczMTJDMTMuMTI4MSAxOC43MzEyIDE0LjM2MzYgMTguMDg2MSAxNS4zMzAyIDE3LjM4OTZDMTYuMzI3NCAxNi42NzEgMTcuMjQzOCAxNS43NDc4IDE4LjAwMyAxNC44Nzg5QzE4Ljc2OTMgMTQuMDAxOSAxOS40MTY3IDEzLjEzMjQgMTkuODcwNiAxMi40ODYzQzIwLjA5ODUgMTIuMTYxOCAyMC4yODAxIDExLjg5IDIwLjQwNjEgMTEuNjk3M0MyMC40NjkyIDExLjYwMDggMjAuNTE4NCAxMS41MjM4IDIwLjU1MjggMTEuNDY5N0MyMC41Njk5IDExLjQ0MjYgMjAuNTgzNCAxMS40MjEyIDIwLjU5MyAxMS40MDU5TDIwLjYxIDExLjM3ODVDMjAuNzcyNyAxMS4xMTQ3IDIwLjg1MzggMTAuODIzNiAyMC44NjA1IDEwLjUzNDZDMjAuODkzNCA5LjQ0OTYzIDIwLjIwOTYgOC4wNTI4NCAxOS4xNjI0IDYuOTIxODhMMTguOTM3MSA2LjY3MTZaTTE2LjQzNDEgOC45MjUyMkMxNS44MTE4IDguMjM0MDcgMTQuNzQ3IDguMTc4MjcgMTQuMDU1OSA4LjgwMDU5QzEzLjM2NDcgOS40MjI5MSAxMy4zMDg5IDEwLjQ4NzcgMTMuOTMxMiAxMS4xNzg5TDE1LjQ1MjMgMTIuNjc5NEwxNS40NjY4IDEyLjY2MjhDMTYuMDk0NyAxMS45NDQxIDE2LjY0MSAxMS4yMTg4IDE3LjA0NDQgMTAuNjQ5N0MxNy4yODYxIDEwLjEwNTkgMTcuMDY4NCA5LjYyOTY4IDE2LjY1OTUgOS4xNzU1MkwxNi40MzQxIDguOTI1MjJaIiBmaWxsPSIjQjhGRjI2Ii8+CjwvZz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjNfZF83M18zMTM2KSI+CjxwYXRoIGQ9Ik0xMC44NjgyIDQuNzMzNEMxMy42Nzk4IDIuNDQ4NjYgMTcuODE5OCAyLjc0NzA2IDIwLjI3MTUgNS40Njk3M0wyMC40ODA1IDUuNzAxMTdMMjAuNzAzMSA1Ljk1MTE3QzIxLjgwNTggNy4yMjg1NCAyMi43MDYgOC45NDQ2IDIyLjY1NjMgMTAuNTg4OUwyMi42NTUzIDEwLjU4NzlDMjIuNjM5NiAxMS4xODMyIDIyLjQ3MTEgMTEuNzgyMyAyMi4xMzg3IDEyLjMyMTNMMjIuMTM1NyAxMi4zMjcxTDIyLjExODIgMTIuMzU0NUwyMi4xMTUyIDEyLjM1ODRMMjIuMDcwMyAxMi40MzE2TDIxLjkxMDIgMTIuNjc5N0MyMS44NDI0IDEyLjc4MzQgMjEuNzYwMyAxMi45MDc5IDIxLjY2NSAxMy4wNDg4TDIxLjM0MDggMTMuNTE4NkMyMC45MjI5IDE0LjExMzUgMjAuMzQ0NyAxNC44OTUxIDE5LjY1NzIgMTUuNzFMMTkuMzU1NSAxNi4wNjA1QzE4LjY1MDUgMTYuODY3NCAxNy43ODI4IDE3Ljc2IDE2LjgwNTcgMTguNTI2NEwxNi4zODA5IDE4Ljg0NjdDMTUuMjkyNyAxOS42MzA4IDEzLjY4MjEgMjAuNTI3MiAxMS43Njc2IDIwLjUyNzNDMTAuMTI0NCAyMC41MjczIDguNjY4NDUgMTkuODYzNCA3LjU4NDk3IDE5LjE5NzNMNy4xNDQ1NCAxOC45MTMxQzYuMTAxMjYgMTguMjEzMiA1LjEzMzQzIDE3LjM1NzYgNC4zMTQ0NiAxNi41NDY5TDMuOTcyNjYgMTYuMjAyMUMzLjI5NzUgMTUuNTEwOCAyLjY5NTYgMTQuODI3IDIuMjA4OTkgMTQuMjQ1MUwxLjc2MjcgMTMuNzAxMkMxLjYyNjY4IDEzLjUzMjIgMS41MDM1MSAxMy4zNzY5IDEuMzk1NTEgMTMuMjM4M0wxLjExNzE5IDEyLjg3NUwwLjkzNTU1MyAxMi42MzI4QzAuOTEzNjYzIDEyLjYwMzEgMC44OTY0ODQgMTIuNTc5IDAuODgzNzk1IDEyLjU2MTVMMC44ODE4NDIgMTIuNTU4NkwwLjg2MzI4OCAxMi41MzIyTDAuODU5MzgxIDEyLjUyNzNDLTAuMjYyNTI0IDEwLjk2NzkgMC4wOTA1NjM0IDguNzkzMDQgMS42NTEzNyA3LjY2OTkyTDEuNzk4ODMgNy41NjgzNkMzLjM0NjI1IDYuNTY5NjggNS40MjE1MyA2Ljk1MTM1IDYuNTA4OCA4LjQ2MDk0SDYuNTA3ODJMNi41MTE3MiA4LjQ2NTgyTDYuNTM5MDcgOC41MDM5MUg2LjU0MDA1QzYuNTY3MzggOC41NDEgNi42MTA3MSA4LjU5OTczIDYuNjY4OTUgOC42NzY3Nkw3LjE4MzYgOS4zMzU5NEw3LjU1MTc2IDkuNzgzMkM3Ljc5NDc2IDEwLjA3MzcgOC4wNjk1MiAxMC4zOTAyIDguMzY2MjIgMTAuNzE1OEM4LjE2NDU1IDguNjI3NjYgOC45MjE5IDYuNDc0NCAxMC42MDA2IDQuOTYyODlMMTAuODY4MiA0LjczMzRaTTE4LjkzNzUgNi42NzE4OEMxNy4wNzA1IDQuNTk4NCAxMy44NzUyIDQuNDMwODkgMTEuODAxOCA2LjI5Nzg1QzkuNzI4NjIgOC4xNjQ4OCA5LjU2MTg0IDExLjM1OTMgMTEuNDI4NyAxMy40MzI2TDEyLjU1NDcgMTQuNjgzNkMxMi42NTE0IDE0Ljc5MSAxMi43NTM3IDE0Ljg5MTQgMTIuODYwNCAxNC45ODM0QzEyLjM3NyAxNS4yNjI5IDEyLjAxMjMgMTUuMzYzMiAxMS43Njc2IDE1LjM2MzNDMTEuNDI2OSAxNS4zNjMzIDEwLjg0MiAxNS4xNzU1IDEwLjAyMTUgMTQuNjI1QzkuMjM5NzggMTQuMTAwNiA4LjQyNTM1IDEzLjM3MTMgNy42NjcgMTIuNTk0N0M2LjkxNTYxIDExLjgyNTMgNi4yNTc3NCAxMS4wNDg4IDUuNzg1MTYgMTAuNDYxOUM1LjU1MDA3IDEwLjE2OTkgNS4zNjI5MiA5LjkyODEgNS4yMzYzMyA5Ljc2MDc0QzUuMTczMTkgOS42NzcyNCA1LjEyNTE5IDkuNjEyIDUuMDkzNzYgOS41NjkzNEM1LjA3ODA0IDkuNTQ4MDIgNS4wNjU3OCA5LjUzMjMzIDUuMDU4NiA5LjUyMjQ2TDUuMDUwNzkgOS41MTA3NEM0LjUwNzQzIDguNzU2NDMgMy40NTQ4OCA4LjU4NDg3IDIuNzAwMiA5LjEyNzkzQzEuOTQ1NDggOS42NzExOCAxLjc3NDI2IDEwLjcyMzcgMi4zMTczOSAxMS40Nzg1TDIuMzM1OTQgMTEuNTAzOUMyLjM0NjgyIDExLjUxODggMi4zNjIxOSAxMS41NDA3IDIuMzgxODQgMTEuNTY3NEMyLjQyMTEyIDExLjYyMDcgMi40Nzc2OCAxMS42OTY2IDIuNTQ5ODEgMTEuNzkyQzIuNjk0MjMgMTEuOTgyOSAyLjkwMjczIDEyLjI1MjEgMy4xNjIxMiAxMi41NzQyQzMuNjc4ODcgMTMuMjE2IDQuNDA5NDYgMTQuMDc4NSA1LjI1NzgyIDE0Ljk0NzNDNi4wOTkxNyAxNS44MDg4IDcuMDk1MDIgMTYuNzE3NyA4LjE0NDU0IDE3LjQyMTlDOS4xNTUyOCAxOC4xIDEwLjQyNDIgMTguNzMxNCAxMS43Njc2IDE4LjczMTRDMTMuMTI4NCAxOC43MzEzIDE0LjM2MzYgMTguMDg2MSAxNS4zMzAxIDE3LjM4OTZDMTYuMzI3MiAxNi42NzExIDE3LjI0MzcgMTUuNzQ3OCAxOC4wMDI5IDE0Ljg3ODlDMTguNzY5MSAxNC4wMDIgMTkuNDE2MyAxMy4xMzI0IDE5Ljg3MDEgMTIuNDg2M0MyMC4wOTgxIDEyLjE2MTggMjAuMjgwMyAxMS44OTAxIDIwLjQwNjMgMTEuNjk3M0MyMC40NjkzIDExLjYwMDggMjAuNTE4NCAxMS41MjM5IDIwLjU1MjcgMTEuNDY5N0MyMC41Njk4IDExLjQ0MjkgMjAuNTgzMiAxMS40MjE1IDIwLjU5MjggMTEuNDA2MkwyMC42MTA0IDExLjM3ODlDMjAuNzczMSAxMS4xMTUxIDIwLjg1MzcgMTAuODIzMiAyMC44NjA0IDEwLjUzNDJDMjAuODkzIDkuNDQ5MjQgMjAuMjA5MiA4LjA1MjY4IDE5LjE2MjEgNi45MjE4OEwxOC45Mzc1IDYuNjcxODhaTTE0LjA1NTcgOC44MDA3OEMxNC43NDY4IDguMTc4NDYgMTUuODEyMyA4LjIzMzY2IDE2LjQzNDYgOC45MjQ4TDE2LjY1OTIgOS4xNzU3OEMxNy4wNjggOS42Mjk4MyAxNy4yODYzIDEwLjEwNTcgMTcuMDQ0OSAxMC42NDk0QzE2LjY0MTUgMTEuMjE4NSAxNi4wOTQ4IDExLjk0NDQgMTUuNDY2OCAxMi42NjMxTDE1LjQ1MjIgMTIuNjc5N0wxMy45MzE2IDExLjE3ODdDMTMuMzA5NCAxMC40ODc2IDEzLjM2NDcgOS40MjMxMyAxNC4wNTU3IDguODAwNzhaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNzNfMzEzNiIgeD0iMi44MjQxOSIgeT0iNi4wNjk5OCIgd2lkdGg9IjE4Ljg2MTYiIGhlaWdodD0iMTMuNzMxMiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzNfMzEzNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183M18zMTM2IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2RfNzNfMzEzNiIgeD0iMS4wMjgwNSIgeT0iNC4yNzM3NCIgd2lkdGg9IjIyLjQ1NDQiIGhlaWdodD0iMTcuMzIzNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzNfMzEzNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183M18zMTM2IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIyX2RfNzNfMzEzNiIgeD0iMiIgeT0iNSIgd2lkdGg9IjE4Ljg2MTYiIGhlaWdodD0iMTMuNzMxMiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0ib3V0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzNfMzEzNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd183M18zMTM2IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIzX2RfNzNfMzEzNiIgeD0iMC4yMDM4NTciIHk9IjMuMjAzNzYiIHdpZHRoPSIyMi40NTQ0IiBoZWlnaHQ9IjE3LjMyMzYiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldC8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzczXzMxMzYiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNzNfMzEzNiIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K
// ==/UserScript==

(function () {
    'use strict';

    const services = new Map(); // serviceID -> service object
    let exchangeRates = null;

    // ---------- data ingestion ----------
    const originalFetch = window.fetch;
    window.fetch = async function (...args) {
        const response = await originalFetch(...args);
        let url = typeof args[0] === 'string' ? args[0] : args[0]?.url || args[0]?.href || '';

        if (url.includes('/commission/services/search')) {
            response.clone().json().then(d => {
                if (Array.isArray(d?.services)) { cache(d.services, 'search'); schedule(); }
            }).catch(() => {});
        } else if (url.includes('/_next/data/') && url.endsWith('.json')) {
            response.clone().json().then(d => {
                const s = d?.pageProps?.initialServices?.services;
                if (Array.isArray(s)) { cache(s, 'route'); schedule(); }
            }).catch(() => {});
        }
        return response;
    };

    function cache(list, source) {
        list.forEach(s => {
            if (!s?.serviceID) return;
            s.__source = source;
            services.set(s.serviceID, s);
        });
    }

    function parseInitialData() {
        try {
            const el = document.getElementById('__NEXT_DATA__');
            const s = el && JSON.parse(el.textContent)?.props?.pageProps?.initialServices?.services;
            if (Array.isArray(s)) cache(s, 'nextdata');
        } catch {}
    }

    async function fetchExchangeRates() {
        try {
            const d = await (await originalFetch('https://api.vgen.co/exchange-rate')).json();
            if (d?.rates) { exchangeRates = d.rates; schedule(); }
        } catch {}
    }

    // ---------- pricing ----------
    function getPriceInfo(s) {
        const basePrice = s.basePrice / 100;
        const currency = s.currency || 'USD';
        let discount = 0;
        const now = new Date();

        if (s.activeDiscountEndDate && new Date(s.activeDiscountEndDate) > now && Array.isArray(s.discounts)) {
            const d = s.discounts.find(d =>
                d.status === 'PUBLISHED' &&
                (!d.startDate || new Date(d.startDate) <= now) &&
                (!d.endDate || new Date(d.endDate) >= now));
            if (typeof d?.percentage === 'number') discount = d.percentage;
        }
        return { basePrice, finalPrice: basePrice * (1 - discount), currency, discountPercent: Math.round(discount * 100) };
    }

    function getSelectedCurrency() {
        const cookie = document.cookie.split('; ').find(r => r.startsWith('v-guest='));
        if (cookie) {
            try {
                const payload = JSON.parse(atob(cookie.split('=')[1].split('.')[1]));
                if (payload?.currency) return payload.currency.toUpperCase();
            } catch {}
        }
        return 'USD';
    }

    function convert(value, from, to) {
        if (!exchangeRates || from === to) return value;
        const toUSD = exchangeRates[from]?.USD ?? 1;
        const fromUSD = exchangeRates.USD?.[to] ?? 1;
        return value * toUSD * fromUSD;
    }

    const symbols = { USD: '$', EUR: '€', GBP: '£', JPY: '¥', CAD: 'CA$', AUD: 'A$', HKD: 'HK$', SGD: 'S$', TWD: 'NT$', KRW: '₩' };

    function formatPrice(info) {
        const target = getSelectedCurrency();
        const val = convert(info.finalPrice, info.currency, target);
        const sym = symbols[target] || target + ' ';
        const num = val % 1 === 0 ? val.toFixed(0) : val.toFixed(2);
        return { text: sym + num, discounted: info.discountPercent > 0, pct: info.discountPercent };
    }

    // ---------- card matching ----------
    const clean = s => (s || '').trim().toLowerCase().replace(/\s+/g, ' ');

    function matchService(card) {
        const link = card.querySelector('a[href]');
        const titleEl = card.querySelector('[class*="serviceNameContainer"] p');
        if (!link || !titleEl) return null;
        const username = (link.getAttribute('href') || '').replace(/^\//, '').split('?')[0].toLowerCase();
        const title = clean(titleEl.innerText);
        for (const s of services.values()) {
            if (clean(s.user?.username) === username && clean(s.serviceName) === title) return s;
        }
        return null;
    }

    // ---------- rendering ----------
    function render() {
        document.querySelectorAll('[class*="ServiceGridCard__GridCard"]').forEach(card => {
            const ratingEl = card.querySelector('[class*="ServiceGridCard__ReviewContainer"]');
            if (!ratingEl) return;

            const service = matchService(card);
            if (!service) return;

            const price = formatPrice(getPriceInfo(service));
            const stamp = price.text + '|' + price.pct;
            if (ratingEl.dataset.vgenPrice === stamp) return;
            ratingEl.dataset.vgenPrice = stamp;

            ratingEl.innerHTML = '';
            const p = document.createElement('p');
            p.textContent = price.text;
            p.style.cssText = 'margin:0;font-weight:700;font-size:0.85rem;color:var(--theme-BLACK);';
            ratingEl.appendChild(p);

            if (price.discounted) {
                const d = document.createElement('span');
                d.textContent = `(-${price.pct}%)`;
                d.style.cssText = 'margin-left:4px;font-size:0.7rem;font-weight:800;color:#f41173;';
                ratingEl.appendChild(d);
            }
        });
    }

    let t = null;
    function schedule() { clearTimeout(t); t = setTimeout(render, 150); }

    // ---------- lifecycle ----------
    let lastUrl = location.href;
    setInterval(() => {
        if (location.href !== lastUrl) { lastUrl = location.href; parseInitialData(); schedule(); }
    }, 1000);

    function init() {
        fetchExchangeRates();
        parseInitialData();
        new MutationObserver(m => m.some(x => x.addedNodes.length) && schedule())
            .observe(document.body, { childList: true, subtree: true });
        schedule();
    }

    window.__vgenPriceDebug = services;

    document.body ? init() : window.addEventListener('DOMContentLoaded', init);
})();
