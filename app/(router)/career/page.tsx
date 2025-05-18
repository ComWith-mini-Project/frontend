import { MainTitle, SubTitle } from 'components/Title';
import Container from 'components/Container';
import Input from 'components/Input';

export default function Career() {
  return (
    <Container className="flex-auto">
      <MainTitle>기본정보</MainTitle>
      <div>
        <SubTitle>내 정보</SubTitle>
        <Input title="이름" placeholder="이름을 입력하세요" />
      </div>
    </Container>
  );
}
