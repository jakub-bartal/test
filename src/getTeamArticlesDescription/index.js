import {authors, articles, teams} from "./const";

function getArticlesStringFormat(articles) {
    if (articles.length === 0) {
        return `0 articles.`;
    } else if (articles.length === 1) {
        return `an article '${articles[0].text}'`;
    } else if (articles.length === 2) {
        return `articles '${articles[0].text}' and '${articles[1].text}'`;
    } else if (articles.length > 2) {
        return `articles '${articles[0].text}', '${articles[1].text}' and ${articles.length - 2} more.`;
    }

    return '';
}

export function getTeamArticlesDescription(teamId) {
    const membersIds = teams.find(team => team.id === teamId).members;
    const members = authors.filter(author => membersIds.includes(author.id));
    let teamArticles = [];

    return members
        .map((member, index) => {
            const memberArticles = articles.filter(article => article.authors && article.authors.includes(member.id));
            let result = `${member.name} wrote ${getArticlesStringFormat(memberArticles)}\n`;
            teamArticles = [...teamArticles, ...memberArticles];

            if (members.length - 1 === index) {
                result = result.concat(`-----\nTeam 'Webscope ${teamId}' co-authored ${[...new Set(teamArticles)].length} out of ${articles.length} articles.`);
            }

            return result;
        }).join("");
}