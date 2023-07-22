// $(document).ready( function(){
//     $('#search').click(function(){
//         $.get('https://63df8d038b24964ae0ef997f.mockapi.io/new'), function (data, status){
//             alert(data + status);
//         }
//     })
// })

const endpoint = 'https://63df8d038b24964ae0ef997f.mockapi.io/new';
let currentUrl = window.location.search.slice(4, 6);
let searchUrl = window.location.search.split('=');
let searchUrl2 = window.location.search;
// let search12 = $("#checkform").val();

// console.log(currentUrl);
// console.log(searchUrl[1].normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').replace(/-+/g, '-').replace(/([^0-9a-z-\s])/g, '').replace(/^-+|-+$/g, '') );
// searchUrl[1].normalize('NFD');
// searchUrl[1].replace(/[\u0300-\u036f]/g, '');
// searchUrl[1].replace(/[đĐ]/g, 'd');
// searchUrl[1].replace(/([^0-9a-z-\s])/g, '')
// searchUrl[1].replace(/(\s+)/g, '-')
// console.log(searchUrl[1]);
fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            // Search
            let card_search = $(`<form action="detail.html" method="get">
                                    <div class="card mb-5";>
                                        <input type="text" id="id${i}" name="id" style="display:none" value="${data[i].id}"/>
                                        <img class="card-img-top" title="${data[i].title}" ${data[i].image}
                                        <div class="card-body">
                                            <h4 class="card-title" title="${data[i].title}">${data[i].title}</h4>
                                        </div>
                                        <input class="btn btn-link" type="submit" id="submit" value="Read more"/>
                                    </div>
                                </form>`);

            if(data[i].title == searchUrl[1].replace(new RegExp("\\+","g"),' ') || data[i].cate == searchUrl[1].replace(new RegExp("\\+","g"),' ')){
                $('#search_main').append(card_search);
            }
            
        }
//console.log(searchUrl2)
    });


