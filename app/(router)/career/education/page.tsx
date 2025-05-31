import { Container, Contents, Hr, Input, MainTitle, SubTitle } from '@/app/_components';

export default function Career() {
  return (
    <Container className="flex-auto">
      <MainTitle>학력</MainTitle>
      <Contents>
        <div>
          <SubTitle>내 정보</SubTitle>
          <Input title="이름" placeholder="홍길동" />
          <Input title="잡 타이틀" placeholder="프로젝트 매니저" />
        </div>
        <Hr />
        <div>
          <SubTitle>연락처</SubTitle>
          <Input title="이메일" placeholder="example@gmail.com" />
          <Input title="휴대폰 번호" placeholder="010-0000-0000" />
        </div>
      </Contents>
    </Container>
  );
}
