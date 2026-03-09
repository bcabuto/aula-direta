"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { courses } from "@/data/courses";

type PaymentMethod = "pix" | "credit" | "boleto";

const steps = [
  { number: 1, label: "Dados Pessoais" },
  { number: 2, label: "Pagamento" },
  { number: 3, label: "Confirmação" },
];

export default function MatriculaPage() {
  const params = useParams();
  const course = courses.find((c) => c.slug === params.slug);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    birthDate: "",
    email: "",
    phone: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    installments: "1",
    acceptTerms: false,
  });

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1B3A6B] mb-4">Curso não encontrado</h1>
          <Link href="/cursos" className="text-[#F5A623] hover:underline">Voltar aos cursos</Link>
        </div>
      </div>
    );
  }

  const pixPrice = course.price * 0.9;
  const enrollmentId = `#AD-2026-${String(Math.floor(Math.random() * 99999)).padStart(5, "0")}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const formatCpf = (value: string) => {
    const nums = value.replace(/\D/g, "").slice(0, 11);
    return nums
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  const formatPhone = (value: string) => {
    const nums = value.replace(/\D/g, "").slice(0, 11);
    if (nums.length <= 10) return nums.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
    return nums.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
  };

  const formatCep = (value: string) => {
    const nums = value.replace(/\D/g, "").slice(0, 8);
    return nums.replace(/(\d{5})(\d)/, "$1-$2");
  };

  const formatCardNumber = (value: string) => {
    const nums = value.replace(/\D/g, "").slice(0, 16);
    return nums.replace(/(\d{4})/g, "$1 ").trim();
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getInstallmentOptions = () => {
    const options = [];
    for (let i = 1; i <= course.installments; i++) {
      const value = (course.price / i).toFixed(2).replace(".", ",");
      options.push(
        <option key={i} value={String(i)}>
          {i}x de R$ {value} {i === 1 ? "(à vista)" : "sem juros"}
        </option>
      );
    }
    return options;
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#1B3A6B] text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Início</Link>
            <span>/</span>
            <Link href={`/cursos/${course.slug}`} className="hover:text-white">{course.name}</Link>
            <span>/</span>
            <span className="text-white">Matrícula</span>
          </div>
          <h1 className="text-2xl font-bold">Matrícula - {course.name}</h1>
        </div>
      </section>

      {/* Stepper */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      currentStep >= step.number
                        ? currentStep === step.number
                          ? "bg-[#F5A623] text-white"
                          : "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`text-sm font-medium hidden sm:block ${currentStep >= step.number ? "text-[#1B3A6B]" : "text-gray-400"}`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${currentStep > step.number ? "bg-green-500" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Area */}
            <div className="lg:col-span-2">
              {/* Step 1 */}
              {currentStep === 1 && (
                <form onSubmit={handleStep1Submit} className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-[#1B3A6B] mb-6">Dados Pessoais</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CPF *</label>
                        <input
                          type="text"
                          name="cpf"
                          required
                          value={formData.cpf}
                          onChange={(e) => setFormData((prev) => ({ ...prev, cpf: formatCpf(e.target.value) }))}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="000.000.000-00"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Data de nascimento *</label>
                        <input
                          type="date"
                          name="birthDate"
                          required
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>

                    <hr className="my-2" />
                    <h3 className="font-semibold text-[#1B3A6B]">Endereço</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CEP *</label>
                        <input
                          type="text"
                          name="cep"
                          required
                          value={formData.cep}
                          onChange={(e) => setFormData((prev) => ({ ...prev, cep: formatCep(e.target.value) }))}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="00000-000"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Rua *</label>
                        <input
                          type="text"
                          name="street"
                          required
                          value={formData.street}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="Nome da rua"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número *</label>
                        <input
                          type="text"
                          name="number"
                          required
                          value={formData.number}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="Nº"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bairro *</label>
                        <input
                          type="text"
                          name="neighborhood"
                          required
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="Bairro"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cidade *</label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="Cidade"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Estado *</label>
                        <select
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none bg-white"
                        >
                          <option value="">UF</option>
                          {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map((uf) => (
                            <option key={uf} value={uf}>{uf}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 bg-[#F5A623] hover:bg-[#e0950e] text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Continuar para pagamento
                  </button>
                </form>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <form onSubmit={handleStep2Submit} className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-[#1B3A6B] mb-6">Forma de Pagamento</h2>

                  {/* Payment method selection */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { id: "pix" as PaymentMethod, label: "PIX", badge: "-10%" },
                      { id: "credit" as PaymentMethod, label: "Cartão de Crédito", badge: null },
                      { id: "boleto" as PaymentMethod, label: "Boleto", badge: null },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`relative p-4 rounded-lg border-2 text-center transition-colors ${
                          paymentMethod === method.id
                            ? "border-[#F5A623] bg-[#F5A623]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {method.badge && (
                          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {method.badge}
                          </span>
                        )}
                        <span className={`text-sm font-semibold ${paymentMethod === method.id ? "text-[#1B3A6B]" : "text-gray-600"}`}>
                          {method.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* PIX */}
                  {paymentMethod === "pix" && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-6">
                      <div className="w-48 h-48 bg-white border-2 border-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="text-center">
                          <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                          <p className="text-xs text-gray-500">QR Code PIX</p>
                        </div>
                      </div>
                      <p className="text-green-800 font-semibold text-lg">
                        Valor com desconto: R$ {pixPrice.toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-green-600 text-sm mt-1">
                        Você economiza R$ {(course.price - pixPrice).toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  )}

                  {/* Cartão */}
                  {paymentMethod === "credit" && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Número do cartão *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => setFormData((prev) => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome no cartão *</label>
                        <input
                          type="text"
                          name="cardName"
                          required
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                          placeholder="NOME COMO NO CARTÃO"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Validade *</label>
                          <input
                            type="text"
                            name="cardExpiry"
                            required
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                            placeholder="MM/AA"
                            maxLength={5}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVV *</label>
                          <input
                            type="text"
                            name="cardCvv"
                            required
                            value={formData.cardCvv}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none"
                            placeholder="000"
                            maxLength={4}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Parcelas</label>
                        <select
                          name="installments"
                          value={formData.installments}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1B3A6B] focus:border-transparent outline-none bg-white"
                        >
                          {getInstallmentOptions()}
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Boleto */}
                  {paymentMethod === "boleto" && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mb-6">
                      <svg className="w-12 h-12 text-blue-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <p className="text-blue-800 font-semibold">
                        Valor: R$ {course.price.toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-blue-600 text-sm mt-2">
                        O boleto será gerado após a confirmação e terá vencimento em 3 dias úteis.
                      </p>
                    </div>
                  )}

                  {/* Termos */}
                  <label className="flex items-start gap-3 mb-6 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      required
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#F5A623] border-gray-300 rounded focus:ring-[#F5A623]"
                    />
                    <span className="text-sm text-gray-600">
                      Li e aceito os{" "}
                      <a href="#" className="text-[#1B3A6B] underline">Termos de Uso</a>{" "}
                      e a{" "}
                      <a href="#" className="text-[#1B3A6B] underline">Política de Privacidade</a>{" "}
                      da Aula Direta. *
                    </span>
                  </label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => { setCurrentStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#F5A623] hover:bg-[#e0950e] text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Finalizar matrícula
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3 - Confirmação */}
              {currentStep === 3 && (
                <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1B3A6B] mb-2">Matrícula realizada com sucesso!</h2>
                  <p className="text-gray-600 mb-6">Parabéns! Sua matrícula foi confirmada.</p>

                  <div className="bg-[#F5F7FA] rounded-lg p-6 text-left mb-6 max-w-md mx-auto">
                    <h3 className="font-semibold text-[#1B3A6B] mb-4">Resumo da matrícula</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Nº da matrícula</span>
                        <span className="font-mono font-bold text-[#1B3A6B]">{enrollmentId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Curso</span>
                        <span className="font-medium text-gray-800">{course.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Aluno</span>
                        <span className="font-medium text-gray-800">{formData.name || "Aluno"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Pagamento</span>
                        <span className="font-medium text-gray-800">
                          {paymentMethod === "pix" ? "PIX" : paymentMethod === "credit" ? "Cartão de Crédito" : "Boleto Bancário"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Valor</span>
                        <span className="font-bold text-[#F5A623]">
                          R$ {paymentMethod === "pix" ? pixPrice.toFixed(2).replace(".", ",") : course.price.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
                    <h4 className="font-semibold text-blue-800 mb-2">Próximos passos:</h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>1. Você receberá um email com os dados de acesso à plataforma.</li>
                      <li>2. Acesse a plataforma e complete seu perfil de aluno.</li>
                      <li>3. Comece a estudar! Suas aulas já estarão disponíveis.</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/"
                      className="bg-[#1B3A6B] hover:bg-[#152d54] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Voltar ao início
                    </Link>
                    <Link
                      href="/cursos"
                      className="border-2 border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Ver mais cursos
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Resumo do curso */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-[#1B3A6B] mb-4">Resumo do pedido</h3>
                <img src={course.image} alt={course.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h4 className="font-semibold text-gray-800 mb-1">{course.name}</h4>
                <p className="text-sm text-gray-500 mb-4">{course.duration} | {course.modality}</p>

                <hr className="mb-4" />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Valor do curso</span>
                    <span className="text-gray-800">R$ {course.price.toFixed(2).replace(".", ",")}</span>
                  </div>
                  {paymentMethod === "pix" && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto PIX (10%)</span>
                      <span>- R$ {(course.price - pixPrice).toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-[#1B3A6B]">Total</span>
                    <span className="text-[#F5A623]">
                      R$ {paymentMethod === "pix" ? pixPrice.toFixed(2).replace(".", ",") : course.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Pagamento 100% seguro
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
