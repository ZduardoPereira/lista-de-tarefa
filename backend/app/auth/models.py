from app import mysql

def get_user_by_email(email):
    cursor = mysql.connection.cursor()
    query = "SELECT * FROM usuarios WHERE email = %s"
    cursor.execute(query, (email,))
    user = cursor.fetchone()
    cursor.close()
    return user

def create_user(email, password):
    cursor = mysql.connection.cursor()
    query = "INSERT INTO usuarios (email, senha) VALUES (%s, %s)"
    cursor.execute(query, (email, password))
    mysql.connection.commit()
    cursor.close()
