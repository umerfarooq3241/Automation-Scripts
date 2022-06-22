
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.action_chains import ActionChains
import time

WAITING_TIME=5
BASE_URL = "https://sandbox.wordpress.qisstpay.com/product/test-5500/"



def get_one_click_button(driver):
    driver.get(BASE_URL)
    print("\n=> Opening Product Page : "+BASE_URL+"\n")
    try:
       one_click_button =  WebDriverWait(driver, WAITING_TIME).until(EC.presence_of_element_located((By.CSS_SELECTOR, '[class=teez-button]')))
       size= Select(driver.find_element_by_id('size'))
       size.select_by_index(1)
       color= Select(driver.find_element_by_id('color'))
       color.select_by_index(1)
       print("Page Loaded")
       return one_click_button

    except TimeoutException:
        print("Loading Failed, Page Took More than " + str(WAITING_TIME) + " seconds to Load ")

#phone no
def enter_phone_number(driver):
    try:
        time.sleep(5)
        driver.switch_to.frame(driver.find_element_by_tag_name("iframe"))
        mobile_input_field = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div[1]/div/div[3]/div/div/div[1]/div/input')
        mobile_input_field.send_keys("03317551278")
        print("phone no added")
        
        checkbox = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div[1]/div/div[4]/div/div/input')
        checkbox.click()


        print("Check Box..")
        #click on checkout button
        click_on_checkout_button = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div[1]/div/div[4]/button')
        click_on_checkout_button.click()
    except TimeoutException:
        print("Loading Failed, Page Took More than " + str(WAITING_TIME) + " seconds to Load ")
           
def otp_screen(driver):
    try:
        elements = WebDriverWait(driver, 20).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "Otp-Fields-New ")))
        for field in elements:
            field.send_keys("0")    
        time.sleep(2)
    except TimeoutException:
        print("page is not available")
def payment_screen(driver):
    try:              
        shipping_dropdown= driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[1]/div/div[4]/div[1]/div/div[2]/img')
        shipping_dropdown.click()
        time.sleep(2)  
        select_first_shipping = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[1]/div/div[4]/div[1]/div[2]/div/div/div/li[1]/div/div[2]')
        select_first_shipping.click()
        time.sleep(2)  
        address_dropdown = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[1]/div/div[4]/div[2]/div/div[2]/img')
        address_dropdown.click()
        time.sleep(2)
        select_billing = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[1]/div/div[4]/div[2]/div[2]/p[2]')
        select_billing.click()
        time.sleep(2)
        driver.find_element_by_tag_name('html').send_keys(Keys.END)
        pay_now = WebDriverWait(driver, 5).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "basic-btn")))
        
        driver.execute_script("arguments[0].click();", pay_now[0])
    except TimeoutException:
        print("cannot select billing or shipping")    

def cancel_order_screen(driver):
    try:
        driver.find_element_by_tag_name('html').send_keys(Keys.END)
        select_cancel_order = WebDriverWait(driver, 5).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "cancel_btn")))
        
        driver.execute_script("arguments[0].click();", select_cancel_order[0])
        time.sleep(20)

        driver.find_element_by_tag_name('html').send_keys(Keys.END)
        yes_cancel_my_order = WebDriverWait(driver, 5).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "alert-btn")))
        
        driver.execute_script("arguments[0].click();", yes_cancel_my_order[0])
        time.sleep(20)

    except TimeoutException:
        print("cannot cancel order")    

        driver.quit()

   
#Main Function
if __name__ == '__main__':
  
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized")
    options.add_argument('--log-level=3')
    driver = webdriver.Chrome(ChromeDriverManager().install())
   #call to click one click checkout button
    one_click_button = get_one_click_button(driver)
    one_click_button.click()



    #1st screen completed
    enter_phone_number(driver) 

    #otp screen completed
    otp_screen(driver)

    #payment methods screen 
    payment_screen(driver)

    #cancel Order
    cancel_order_screen(driver)

    time.sleep(20)
   