
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
       size.select_by_index(3)
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
        shipping_dropdown = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[1]/div/div[4]/div[1]/div/div[2]/img')
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
        
       
    except TimeoutException:
        print("cannot select billing or shipping")

def select_card_processing(driver):
    try:
        card_processing= driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[5]/div[2]/div[1]/div/div[1]/img')
        card_processing.click()
        time.sleep(2)

        card_number = driver.find_element_by_xpath('/html/body/div/div/div[2]/div/div/div[1]/div/div[5]/div[2]/div/div/div[4]/div/div/div/div[1]/div/div/input')
        card_number.send_keys("4242424242424242")
        print("card  no added")

        time.sleep(2)
        name_on_card = driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[5]/div[2]/div[1]/div/div[2]/div/div/div/div/div[2]/div/div/input')
        name_on_card.send_keys("Umer Fraooq Khan test")
        print("name on card added")

        time.sleep(2)
        expiry_date = driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[5]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/div[3]/div/div/input')
        expiry_date.send_keys("02/28")
        print("Expiry date added")

        time.sleep(2)
        cvv_no = driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div/div/div[1]/div/div[5]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/div[4]/div/div/input')
        cvv_no.send_keys("02/28")
        print("CVV added")


        time.sleep(2)
        driver.find_element_by_tag_name('html').send_keys(Keys.END)
        pay_now = WebDriverWait(driver, 5).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "basic-btn")))
        driver.execute_script("arguments[0].click();", pay_now[0])

    except TimeoutException:
        print("cannot open card processing")

def select_card_secure(driver):
    try:
        time.sleep(5)
        driver.switch_to.frame(driver.find_element_by_tag_name("iframe"))
        secure = driver.find_element_by_xpath('/html/body/div[2]/div/form/div/input')
        secure.send_keys("Checkout1!")
        print("Successfully passed 3DS")

        #time.sleep(2)
        #secure = driver.find_element_by_xpath('/html/body/div[2]/div/form/div/input')
        #secure.send_keys("Checkout1!")
        #print("3DS added")


        time.sleep(2)
        driver.find_element_by_tag_name('html').send_keys(Keys.END)
        continue_secure = WebDriverWait(driver, 5).until(EC.visibility_of_all_elements_located((By.CLASS_NAME, "btn")))
        driver.execute_script("arguments[0].click();", continue_secure[0])
        


    except TimeoutException:
        print("3DS Failed")    


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

        driver.close()

   
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

    #select_card_processing
    select_card_processing(driver)

    #cancel Order
    #cancel_order_screen(driver)

    time.sleep(20)
   