class ChinaPackage:
    def detail(self):
        print("중국 패키지 5박 6일, 가격은 60만원")

if __name__ == "__main__":
    print("China 모듈 직접 실행")
    print("이 문장은 모듈을 직접 실행할 때에만 실행돼요.")
    trip_to = ChinaPackage()
    trip_to.detail()
else :
    print("China 외부에서 모듈 호출")