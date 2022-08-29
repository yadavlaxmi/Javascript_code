import requests
import json

from requests.api import request
x=requests.get("http://saral.navgurukul.org/api/courses")
data=x.json()
c=1
list=[]
for i in data["availableCourses"]:
    print(c,i["name"],i['id'])
    list.append(i["id"])
    c+=1
num=int(input("enter the courese:::__"))
a=list[num-1]
m=requests.get("http://saral.navgurukul.org/api/courses/"+str(a)+"/exercises")
print(m.json())
def option(select,var1,slug,data1):
    while True:
        var_1=var1
        option=input("inter the option::- UP,NEXT,EXIT")
        if option=="UP":
            print(var_1)
            var_1-1
            req=requests.get("http://saral.navgurukul.org/api/courses/"+str(select)+"/exercise/getBySlug?slug"+str(slug[var_1]))
            request=req.json()
            print("........contant........",request["contant"])
            print(var_1)
        elif option=="NEXT":
            var_1+=1
            req=request.get("http://saral.navgurukul.org/api/courses/"+str(select)+"/exercise/getBySlug?slug"+str(slug[var_1-1]))
            request1=req.json()
            print(".........contant........",request1["countant"])
            print(var_1)
        elif option=="BACK":
            c=1
            for dictnuary in data1("data"):
                print(c,dictnuary["name"])
                c+=1
                for i in dictnuary["childExercises"]:
                    print("..",c,i["name"])
                    c+=1
        else:
            break
def courses():
    index=0
    for i in data["availableCourses"]:
        print(index+1,i["name"],i["id"])
        index+=1
    for cource in data["availableCourses"]:
        course=int(input("enter your index of course= "))
        select=data["availableCourses"][course-1]["id"]
        var1=requests.get("http://saral.navgurukul.org/api/courses/"+str(select)+"/exercises")
        data1=var1.json()
        c=1
        slug=[]
        for dic_data in data1["data"]:
            print(c,dic_data["name"])
            slug.append(dic_data["slug"])
            c+=1
            for child in dic_data["childExercises"]:
                print(" ",c,child["slug"])
                c+=1
        var4=int(input("selected content slug ::"))
        var3=requests.get("http://saral.navgurukul.org/api/courses/"+str(select)+"/exercise/getBySlug?slug="+str(slug[var4-1]))
        data4=var3.json()
        option(select,var1,slug,data1)
courses()