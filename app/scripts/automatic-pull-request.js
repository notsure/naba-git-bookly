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

//test

if (window.location.href.match("github.com")) {
    if (window.location.href.match("/compare/")) {
        if (!$(".js-quick-submit")) {
            $(".js-details-target").click()
        }
        var text="__Tasks:__\n"+"- [x] done\n"+"- [ ] todo\n"+"- [ ] got feedback\n\n"+"__Informations:__\n\n"+"| Q             | A\n"+"| ------------- | ---\n"+"| Bug fix?      | no\n"+"| New feature?  | yes\n"+"| Tests pass?   | yes\n"+"| Fixed tickets | none\n"+"| Doc           | none\n";
        $(".js-quick-submit").html(text);
        $(".composer-submit").click()
    } else {
        alert("This fancy script currently only works on new pull requests!")
    }
} else {
    alert("Sorry, this script only works on a github.com pull-request page!")
}
