import { Container, Hr, Input, MainTitle, SubTitle } from '@/app/_components';

export default function Career() {
  return (
    <Container className="flex-auto pb-[4.2rem]">
      <MainTitle>자격증</MainTitle>
      <div>
        <div style={{ marginTop: 'var(--hr-margin)' }}>
          <SubTitle>내 정보</SubTitle>
          <Input title="이름" placeholder="홍길동" />
          <Input title="잡 타이틀" placeholder="프로젝트 매니저" />
          <Hr />
        </div>
        <div>
          <SubTitle>연락처</SubTitle>
          <Input title="이메일" placeholder="example@gmail.com" />
          <Input title="휴대폰 번호" placeholder="010-0000-0000" />
        </div>
      </div>
    </Container>
  );
}
