import "./App.css";

function Apps() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignupForm />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}