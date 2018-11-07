import React, { Component, Fragment } from 'react'
import axios from 'axios'

import { Header, Repositories, Offline, Loader } from './styles'

class App extends Component {
  state = {
    online: window.navigator.onLine,
    // online: false,
    newRepoInput: "",
    repositories: JSON.parse(localStorage.getItem('@wjuniorPWA:repos'))|| [],
    loading: false,
  }
  componentDidMount() {
    window.addEventListener('online', ()=> this.handleNetwork())
    window.addEventListener('offline', ()=> this.handleNetwork())
  }
  handleNetwork() {
    this.setState({ online: window.navigator.onLine })
  }
  async addRepository() {
    // alert(`window.navigator.onLine: ${window.navigator.onLine}`)
    await this.setState({loading: true})
    // if (this.state.newRepoInput === '') return ;
    if (this.state.newRepoInput === '') {
      console.log('Digite um repositorio')
      return this.setState({loading: false})
    }
    if (!this.state.online) {
      alert('voce esta offline :-(')
      return this.setState({loading: false})
    }
    let url =  `https://api.github.com/repos/${this.state.newRepoInput}`
    // console.log('tessste', url);
    const response = await axios.get(url).catch(err=> {
      alert('Erro!!')
      this.setState({loading: false})
    })
    !!response
    ?this.setState({
      newRepoInput: "",
      loading: false,
      repositories: [ ...this.state.repositories, response.data ]
    }):null
    localStorage.setItem('@wjuniorPWA:repos', JSON.stringify(this.state.repositories))
  }
  async removeRepo(id) {
    console.log(id)
    const repositories = this.state.repositories.filter(it=> it.id !== id)
    await this.setState({ repositories })
    localStorage.removeItem('@wjuniorPWA:repos')
    localStorage.setItem('@wjuniorPWA:repos', JSON.stringify(repositories))
  }
  render() {
    return (
      <Fragment>
        <Header>
          <input
            placeholder="ex: user-name/repo-name"
            onChange={e=> this.setState({newRepoInput: e.target.value })}
            value={this.state.newRepoInput}
          />
          <button onClick={()=> this.addRepository() }>Adicionar </button>
        </Header>
        <Repositories>
          {
            this.state.repositories.map(repo => (
              <li key={repo.id}>
                <img src={repo.owner.avatar_url} alt="foto perfil"/>
                <div>
                  <strong> {repo.name} </strong>
                  <p> {repo.description} </p>
                  <a href={repo.html_url} target="blank"> Acessar </a>
                </div>
                <div onClick={()=> this.removeRepo(repo.id) } className="close">x</div>
              </li>
            ))
          }
        </Repositories>
        {
          this.state.loading ? <Loader>Carregando...</Loader> :null
        }
        {
          !this.state.online
          ? <Offline>voce esta Offline :-/ </Offline> : null
        }
      </Fragment >
    )
  }
}

export default App;
