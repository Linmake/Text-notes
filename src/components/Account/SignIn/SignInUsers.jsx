import React from 'react'

export default function SignInUsers() {
  const { email, setEmail } = UseData();
  const handlerSubmit = async (event) => {
    try{
    event.preventDefault();
    const body = {
      Email: email,
    };
    const data = await isSignupByEmail(body);
    if (data){ 
      console.log(`email already exist, ${data}`)
      return
    };
    navigate("pwd");
  }catch(err){
    console.log(err)
  }
  };
  return (
    <Container>
      <ContainerDesc>
        <img
          srcSet={NotepadImageRemoveBg}
          width={70}
          alt="efficent notes logo"
        ></img>
        <TitleH1>Sign up to Efficient Notes</TitleH1>
      </ContainerDesc>
      <RegisterForm onSubmit={(event) => handlerSubmit(event)}>
        <LabelEmail htmlFor="email">Email</LabelEmail>
        <InputEmail
          autoCapitalize
          spellCheck
          id="email"
          type="email"
          placeholder="Your email address"
          required
          autoFocus
          title
          data-invalid={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <BttContinue type="submit" id="submitButton">
          Continue
        </BttContinue>
        <Spaced>
          <Separator></Separator>
          <div>
            <span>OR</span>
          </div>
          <Separator></Separator>
        </Spaced>
        <GoogleGrid>Continue with Google</GoogleGrid>
      </RegisterForm>
    </Container>
  );
};
