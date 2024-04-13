/// <reference types="cypress" />

import loginPage from "../pages/loginPage";
import mainPage from "../pages/mainPage";
import homePage from "../pages/homePage";
import baseLib from "../base/baseLib";

describe('User Tests', () => {

    const login_page = new loginPage();
    const main_page = new mainPage();
    const home_page = new homePage();
    const base_lib = new baseLib();
    var url = "https://parabank.parasoft.com";
    var errorMessage1 = "An internal error has occurred and has been logged.";
    var errorMessage2 = "Please enter a username and password."

    it('Başarılı Kullanıcı Girişi Kontrolü', () => {

        main_page
            .goToUrl(url);
  
        login_page
            .fillUserName("TestQa123")
            .fillPassword("123")
            .clickLogin();   
  
        home_page
            .titleControl("Accounts Overview");
  
        })
    
    it('Başarısız Kullanıcı Girişi Kontrolü', () => {

      main_page
      .goToUrl(url);

      login_page
          .fillUserName("Test")
          .fillPassword("Test")
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage1);

        })

      it('Username Alanı Max Karakter Kontrolü', () => {

      main_page
          .goToUrl(url);

      login_page
          .fillUserName(base_lib.getRandomText(500))
          .fillPassword("123")
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage1);
  
      })

      it('Password Alanı Max Karakter Kontrolü', () => {

      main_page
          .goToUrl(url);

      login_page
          .fillUserName("TestQa123")
          .fillPassword(base_lib.getRandomText(500))
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage1);
  
      })

      it('Username ve Password Alanı Zorunluluk Kontrolü', () => {

      main_page
          .goToUrl(url);

      login_page
          .clearFilledUsername()
          .clearFilledPassword()
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage2);
  
      })

      it('Username Alanı Zorunluluk Kontrolü', () => {

      main_page
          .goToUrl(url);

      login_page
          .clearFilledUsername()
          .fillPassword("123")
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage2);
  
      })

      it('Password Zorunluluk Kontrolü', () => {

      main_page
          .goToUrl(url);

      login_page
          .fillUserName("TestQa123")
          .clearFilledPassword()
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage2);
  
      })

      it('Başarısız Username Alanı Kontrolü', () => {

      main_page
      .goToUrl(url);

      login_page
          .fillUserName("Test")
          .fillPassword("123")
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage1);
  
      })

      it('Başarısız Password Alanı Kontrolü', () => {

      main_page
      .goToUrl(url);

      login_page
          .fillUserName("TestQa123")
          .fillPassword("Test")
          .clickLogin();

      main_page
          .errorMessageControl(errorMessage1);
  
      })
  })