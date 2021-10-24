 //camelCase / PascalCase / snake_case --> boa práticas p nomes de variáveis

   const userSocialMedia = { //Cria de objeto
      //  github:'ozicosta',
       instagram: 'ozieni_costa'
     }

   function mudarLinkRedeSocial() {
      // document.getElementById('userName'). // -> uma das formas para alterar valor no html usando Id
      // textContent='Ozi Costa'

      //userName.textContent = 'Ozii Costa' //forma simplificada para alterar valor dentro do html

      for(let li of socialLinks.children){
     // alert(li.getAttribute('class')) ou -->
      const social = li.getAttribute('class')
     // alert(social)

   li.children[0].href = `https://www.${social}.com/${userSocialMedia[social]}`

      // alert(li.children[0].href)
    }
}
          mudarLinkRedeSocial()
           
   function userGithubProfile(){
      const url =`https://api.github.com/users/${userSocialMedia.github}`

      fetch(url)
      .then(resposta => resposta.json())
      .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        // user
      })  
    }

    userGithubProfile()
        
