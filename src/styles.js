import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body {
    fontfamily: 'Norasi oblique'
  }
`
const rounded = `
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const Header = styled.header`
  width: 100%;
  justify-content: center;
  background: #22bed9;
  font-size:18px;
  color: #FFF;
  font-weight: 600;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top:0;
  left:0;

  input {
    flex: 1;
    border: 0;
    background: #FFF;
    color: 333;
    height: 32px;
    font-size: 14px;
    padding: 0 10px;
    margin-right: 10px;
    ${rounded};
  }
  button {
    background: transparent;
    font-weight:600;
    padding: 5px;
    color: #fff;
    font-size: 16;
    cursor: poiter;
    border: solid 1px;
    ${rounded};
  }
`
export const Repositories = styled.ul`
  list-style: none;
  margin: 70px 20px 20px;

  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap:20px;
  grid-row-gap:20px;

  @media(max-width: 1000px){
    grid-template-columns: repeat(2, 1fr)
  }
  @media(max-width: 600px){
    grid-template-columns: repeat(1, 1fr)
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #eee;
    padding:15px;
    background:#fff;
    box-shadow: 0 0 10px 0 rgba(221,221,221, 0.5);
    border-radius: 4px;

    img {
      height: 60px;
      border-radius: 50%;
    }
    div {
      flex:1;
      margin-left: 15px;

      strong {
        // width:140px;
        color: #333;
        fonst-size: 16px;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
      p {
        fonst-size: 14px;
        color: #666;
        margin-top: 5px;
      }
      a {
        color: #22bed9;
        fonst-size:14px;
        font-weight:bold:
        margin-top:10px;
        text-decoration: none;
        text-transform: uppercase;
        display: block;
      }

    }
    div.close {
      flex:0;
      align-items: center;
      align-self: flex-start;
      border-radius:50%;
      background-color: #cb3837;
      color: #fff;
      cursor: pointer;
      padding: 4px 6px 7px;
      line-height: 9px;
      justify-content: center;
      padding-bottom: 7px;
    }
  }
`
export const Offline = styled.div`
  left:0;
  bottom: 0;
  height:40px;
  color: #fff;
  width: 100%;
  padding:8px;
  display:flex;
  position: fixed;
  align-itens: center;
  justify-content: center;
  background: #b93333;
  font-weight:600;
`
export const Loader = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  color: #FFF;
  top:0;
  left:0;
  bottom: 0;
  opacity: 0.8;
  font-weight: 600;
  background: #22bed9;
`
