"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function PaymentPage() {
  const router = useRouter();
  const { getCartAmount, currency, setCartItems } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [selectedApp, setSelectedApp] = useState("gpay");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const totalAmount = getCartAmount() + Math.floor(getCartAmount() * 0.02);

  const handlePayment = (e) => {
    e.preventDefault();
    if (!upiId.includes("@")) {
      alert("Please enter a valid UPI ID (e.g. name@upi)");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setCartItems({}); // Clear cart after payment
      setTimeout(() => {
        router.push("/order-placed");
      }, 1500);
    }, 2500);
  };

  if (!mounted) return null;

  const apps = [
    { id: "gpay", name: "Google Pay", icon: "G" },
    { id: "phonepe", name: "PhonePe", icon: "P" },
    { id: "paytm", name: "Paytm", icon: "T" },
    { id: "other", name: "Other UPI", icon: "U" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-4xl bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Order Summary & QR */}
        <div className="w-full lg:w-5/12 bg-gray-50 p-8 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Items Total</span>
                <span className="font-medium text-gray-900">{currency}{getCartAmount()}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes (2%)</span>
                <span className="font-medium text-gray-900">{currency}{Math.floor(getCartAmount() * 0.02)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between items-center pb-2">
                <span className="text-base font-semibold text-gray-900">Total to Pay</span>
                <span className="text-xl font-bold text-gray-900">
                  {currency}{totalAmount}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Pay via QR</p>
            <div className="inline-block p-2 bg-white border border-gray-200 rounded-xl shadow-sm">
               {/* Actual QR Image - The user will provide this image */}
               <img 
                 src="/my_qr_code.png" 
                 alt="Scan to Pay" 
                 className="w-32 h-32 object-contain"
                 onError={(e) => {
                   e.target.src = "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"; // Fallback proxy
                 }}
               />
            </div>
            <p className="text-sm text-gray-500 mt-4">Scan with any UPI application</p>
          </div>
        </div>

        {/* Right Side: Form & App Select */}
        <div className="w-full lg:w-7/12 p-8 relative">
          
          {success && (
            <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center rounded-r-2xl">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                 <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h2 className="text-xl font-bold text-gray-900 mb-1">Payment Successful</h2>
               <p className="text-sm text-gray-500">Redirecting to your order receipt...</p>
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">UPI Payment</h2>
            <p className="text-sm text-gray-500 mt-1">Select your preferred UPI app or enter ID</p>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Pay using</label>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {apps.map((app) => (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setSelectedApp(app.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-colors ${
                    selectedApp === app.id
                      ? "border-black bg-gray-50 ring-1 ring-black"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center text-white text-xs font-bold ${
                    app.id === 'gpay' ? 'bg-blue-600' :
                    app.id === 'phonepe' ? 'bg-purple-600' :
                    app.id === 'paytm' ? 'bg-sky-500' : 'bg-gray-800'
                  }`}>
                    {app.icon}
                  </div>
                  <span className={`text-sm font-medium ${selectedApp === app.id ? "text-gray-900" : "text-gray-600"}`}>
                    {app.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handlePayment} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">UPI ID / VPA</label>
              <input
                required
                type="text"
                name="upiId"
                placeholder="username@bank"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value.toLowerCase().trim())}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-shadow sm:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                <span>Pay securely</span>
              )}
            </button>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span>100% Secure Transaction</span>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
