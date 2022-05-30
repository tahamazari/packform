import psycopg2
import csv

conn = psycopg2.connect("host=localhost dbname=packform user=postgres password=1234")
cur = conn.cursor()

with open('./orders.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader) # Skip the header row.
    for row in reader:
        cur.execute(
        "INSERT INTO orders VALUES (%s, %s, %s, %s, %s, %s, %s)",
        row
    )
conn.commit()