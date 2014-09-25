/**
 * NabaGitBookly
 * Creates a pull request on Github by clicking on the bookmark in your browser
 * Version: 0.0.1
 *
 * Who made this:
 * --------------
 * Creator: Nachbauer Philip
 * Website: www.naba.at
 * Email: hello@naba.at
 * Twitter: @nochbur
 */
var text;if(window.location.href.match("github.com"))if(window.location.href.match("/compare/")){$(".js-quick-submit")||$(".js-details-target").click(),text="** NabaGitBookly **\nPlease enter a title for you pull request.\n\nYou may want to use some of these prefixes:\n[WIP] \n [FEATURE] \n [BUGFIX] \n [HOTFIX] \n [EXPERIMENTAL]";var pullRequestTitle=prompt(text,$("#pull_request_title").val());pullRequestTitle&&$("#pull_request_title").val(text),text="__Tasks:__\n- [x] done\n- [ ] todo\n- [ ] got feedback\n\n__Informations:__\n\n| Q             | A\n| ------------- | ---\n| Bug fix?      | no\n| New feature?  | yes\n| Tests pass?   | yes\n| Fixed tickets | none\n| Doc           | none\n",$(".js-quick-submit").html(text),$(".composer-submit").click()}else text="** NabaGitBookly **\nThis fancy script currently only works on new pull requests!",alert(text);else{text="** NabaGitBookly **\nWoops sorry this script only works on a www.github.com pull-request page.\n\nDo you want me to redirect you to: http://www.github.com?";var redirect=confirm(text);redirect&&(window.location.href="http://www.github.com")}