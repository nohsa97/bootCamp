
const user_info_container = document.querySelector('.user_info_container');
const repo_container = document.querySelector('.repo_container');
const repo_list_box = document.querySelector('.latest_repo_list');
const glass_box = document.querySelector('.user_glass_on');
const Wrong_access = document.createElement('h1');
Wrong_access.innerHTML = 'Wrong UserName';
Wrong_access.className = 'Wrong_access';

let page = 1;
let repo_items = 0;

function enter() {
    if(window.event.keyCode == 13){


        const user_name = document.querySelector('.input_user_name').value;
        const git_user_url = `https://api.github.com/users/${user_name}`;
        let git_repo_url = ``;

        let result = getData(git_user_url);
        result = result.then((user_info) => { 
            if(user_info.message === 'Not Found'){
                document.querySelector('.main').append(Wrong_access);
                document.querySelector('.user_glass_on').innerHTML = '';
                document.querySelector('.user_info_container').classList.remove('display_on');
                repo_container.classList.remove('display_on_block');
                repo_list_box.innerHTML = '';
                return error;
            }
            //잔디
            document.querySelector('.user_glass_on').innerHTML = '';
            let user_glass = `https://ghchart.rshah.org/${user_info.login}`;
            let user_glass_img = document.createElement('img');
            user_glass_img.setAttribute('class', 'glass_img');
            user_glass_img.setAttribute('src', user_glass);
            document.querySelector('.user_glass_on').append(user_glass_img);

            document.querySelector('.user_img').setAttribute('src',`${user_info.avatar_url}`);
            document.querySelector('.comapny').innerHTML = `Company: ${user_info.company}`;
            document.querySelector('.html_url').innerHTML = `Website/Blog: ${user_info.blog}`;
            document.querySelector('.location').innerHTML = `Location: ${user_info.location}`;
            document.querySelector('.created_at').innerHTML = `Member Since: ${user_info.created_at}`;
            document.querySelector('.user_info_View').setAttribute('onclick', `goProfile('${user_info.html_url}')`);

            document.querySelector('.info_repos').innerHTML = `Public Repos: ${user_info.public_repos}`;
            document.querySelector('.info_gists').innerHTML = `Public Gists: ${user_info.public_gists}`;
            document.querySelector('.info_follower').innerHTML = `Follower: ${user_info.followers}`;
            document.querySelector('.info_following').innerHTML = `Following: ${user_info.following}`;

            user_info_container.className += ' display_on';
            glass_box.className += ' display_on';

            repo_items = user_info.public_repos;

            page += parseInt(repo_items / 30);

            if(repo_list_box.hasChildNodes()){
                repo_list_box.innerHTML = '';
            }

            for(var i = 1 ; i <= page; i++) {
                git_repo_url = `https://api.github.com/users/${user_name}/repos?page=${i}`;
                repo_result = getData(git_repo_url).then((git_info) => {
                    if(git_info.message === 'Not Found'){
                        document.querySelector('.user_glass_on').innerHTML = '';
                        repo_container.classList.remove('display_on');
                        document.querySelector('.user_info_container').classList.remove('display_on_block');
                        repo_list_box.innerHTML = '';
                        return error;
                    }
        
                    repo_container.className += ' display_on_block';
        
                    for(j= 0; j < git_info.length; j ++){
                        addRepoBox(git_info[j]);
                    }
        
                });
            }

        });

        }

    }

async function getData(url) {
    try {
        const response = await fetch(url);
        const json_response = await response.json();
        console.log(json_response);

        return json_response;
    }
    catch(error) {
        console.log(error);
    }
}

function addRepoBox (repo) {

    const repo_box = document.createElement('div');
    repo_box.className = 'latest_repo';

    const link = document.createElement('a');
    link.innerHTML = repo.name;

    // 링크 넣는부분
    link.setAttribute('href',repo.html_url);
    link.setAttribute('target','_blank');

    repo_box.append(link);


    const user_info_btn_set = document.createElement('div');
    user_info_btn_set.className = 'user_info_btn_set';

    let stars_btn = document.createElement('button');
    stars_btn.innerHTML = 'Stars: ' + repo.stargazers_count;
    let Watchers_btn = document.createElement('button');
    Watchers_btn.innerHTML = 'Watchers: ' + repo.watchers_count;
    let forks_btn = document.createElement('button');
    forks_btn.innerHTML = 'Forks: ' + repo.forks;

    user_info_btn_set.append(stars_btn);
    user_info_btn_set.append(Watchers_btn);
    user_info_btn_set.append(forks_btn);

    repo_box.append(user_info_btn_set);

    repo_list_box.append(repo_box);
}

function goProfile(href) {
    window.open(href,'_blank');
}
