// "use client"

// import { useState, useEffect } from "react"

// export default function PaymentForm({ open, setOpen, onSuccess, editData }) {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     clientEmail: "",
//     amount: "",
//     totalFee: "",
//   })

//   useEffect(() => {
//     if (editData) setForm(editData)
//   }, [editData])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const method = editData ? "PUT" : "POST"
//     const url = editData
//       ? `/api/payments/${editData._id}`
//       : "/api/payments"

//     await fetch(url, {
//       method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     })

//     setOpen(false)
//     onSuccess()
//   }

//   if (!open) return null

//   return (
//     <div className="fixed inset-0 bg-black/50 flex items-center justify-center text-black dark:text-white dark:bg-black ">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 space-y-3 rounded w-[300px] text-black dark:text-white dark:bg-black"
//       >
//         <input placeholder="Title" className="border p-2 w-full"
//           value={form.title}
//           onChange={(e)=>setForm({...form,title:e.target.value})}
//         />

//         <input placeholder="Description" className="border p-2 w-full"
//           value={form.description}
//           onChange={(e)=>setForm({...form,description:e.target.value})}
//         />

//         <input placeholder="Client Email" className="border p-2 w-full"
//           value={form.clientEmail}
//           onChange={(e)=>setForm({...form,clientEmail:e.target.value})}
//         />

//         <input placeholder="Amount" type="number" className="border p-2 w-full"
//           value={form.amount}
//           onChange={(e)=>setForm({...form,amount:e.target.value})}
//         />

//         <input placeholder="Total Fee" type="number" className="border p-2 w-full"
//           value={form.totalFee}
//           onChange={(e)=>setForm({...form,totalFee:e.target.value})}
//         />

//         <button className="bg-black text-white p-2 w-full">
//           Save
//         </button>
//       </form>
//     </div>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { useNotification } from "@/hooks/useNotification"

export default function PaymentForm({ open, setOpen, onSuccess, editData }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    clientEmail: "",
    amount: "",
    totalFee: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState("")
  const notify = useNotification()

  useEffect(() => {
    setFormError("")

    if (editData) {
      setForm({
        title: editData.title || "",
        description: editData.description || "",
        clientEmail: editData.clientEmail || "",
        amount: editData.amount?.toString?.() ?? `${editData.amount ?? ""}`,
        totalFee: editData.totalFee?.toString?.() ?? `${editData.totalFee ?? ""}`,
      })
    } else {
      setForm({ title: "", description: "", clientEmail: "", amount: "", totalFee: "" })
    }
  }, [editData, open])

  // prevent background scroll while modal is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError("")

    const amount = Number(form.amount) || 0
    const totalFee = Number(form.totalFee) || 0

    if (amount > totalFee) {
      const message = "Amount paid cannot be greater than total fee."
      setFormError(message)
      notify.error("Invalid payment amount", message)
      return
    }

    setSubmitting(true)
    const method = editData ? "PUT" : "POST"
    const url = editData ? `/api/payments/${editData._id}` : "/api/payments"

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          amount,
          totalFee,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        const message = data?.error || data?.message || "Unable to save payment."
        setFormError(message)
        notify.error("Save failed", message)
        return
      }

      notify.success(
        editData ? "Payment updated" : "Payment saved",
        editData ? "The payment was updated successfully." : "The payment was recorded successfully."
      )
      setOpen(false)
      onSuccess()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to save payment."
      setFormError(message)
      notify.error("Save failed", message)
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  const balance = (Number(form.totalFee) || 0) - (Number(form.amount) || 0)
  const isAmountInvalid =
    form.amount !== "" && form.totalFee !== "" && Number(form.amount) > Number(form.totalFee)

  return (
    <div
      className="fixed inset-0 z-[11000] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
    >
      <div className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden
        bg-white dark:bg-zinc-900
        border border-gray-200 dark:border-white/10">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center
              bg-gray-100 dark:bg-white/10">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                className="text-gray-600 dark:text-gray-300">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                {editData ? "Edit Payment" : "Add Payment"}
              </h3>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {editData ? "Update payment details" : "Record a new payment entry"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors
              bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20
              text-gray-500 dark:text-gray-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

          {/* Title */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5
              text-gray-500 dark:text-gray-400">
              Title
            </label>
            <input
              placeholder="e.g. Website Development Phase 1"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
              className="w-full h-10 px-3 rounded-lg text-sm outline-none transition-all
                bg-gray-50 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                text-gray-900 dark:text-white
                placeholder:text-gray-400 dark:placeholder:text-gray-600
                focus:border-gray-400 dark:focus:border-white/30
                focus:ring-2 focus:ring-gray-200 dark:focus:ring-white/10"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5
              text-gray-500 dark:text-gray-400">
              Description
            </label>
            <textarea
              placeholder="Brief notes about this payment…"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 rounded-lg text-sm outline-none transition-all resize-none
                bg-gray-50 dark:bg-white/5
                border border-gray-200 dark:border-white/10
                text-gray-900 dark:text-white
                placeholder:text-gray-400 dark:placeholder:text-gray-600
                focus:border-gray-400 dark:focus:border-white/30
                focus:ring-2 focus:ring-gray-200 dark:focus:ring-white/10"
            />
          </div>

          {/* Client Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5
              text-gray-500 dark:text-gray-400">
              Client Email
            </label>
            <div className="relative">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <input
                type="email"
                placeholder="client@example.com"
                value={form.clientEmail}
                onChange={(e) => setForm({ ...form, clientEmail: e.target.value })}
                required
                className="w-full h-10 pl-9 pr-3 rounded-lg text-sm outline-none transition-all
                  bg-gray-50 dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  text-gray-900 dark:text-white
                  placeholder:text-gray-400 dark:placeholder:text-gray-600
                  focus:border-gray-400 dark:focus:border-white/30
                  focus:ring-2 focus:ring-gray-200 dark:focus:ring-white/10"
              />
            </div>
          </div>

          {/* Amount + Total Fee */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5
                text-gray-500 dark:text-gray-400">
                Amount Paid
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400 dark:text-gray-500 pointer-events-none">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  value={form.amount}
                  onChange={(e) => setForm({ ...form, amount: e.target.value })}
                  required
                  className="w-full h-10 pl-7 pr-3 rounded-lg text-sm outline-none transition-all font-mono
                    bg-gray-50 dark:bg-white/5
                    border border-gray-200 dark:border-white/10
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-600
                    focus:border-gray-400 dark:focus:border-white/30
                    focus:ring-2 focus:ring-gray-200 dark:focus:ring-white/10"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5
                text-gray-500 dark:text-gray-400">
                Total Fee
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-400 dark:text-gray-500 pointer-events-none">₹</span>
                <input
                  type="number"
                  placeholder="0"
                  min="0"
                  value={form.totalFee}
                  onChange={(e) => setForm({ ...form, totalFee: e.target.value })}
                  required
                  className="w-full h-10 pl-7 pr-3 rounded-lg text-sm outline-none transition-all font-mono
                    bg-gray-50 dark:bg-white/5
                    border border-gray-200 dark:border-white/10
                    text-gray-900 dark:text-white
                    placeholder:text-gray-400 dark:placeholder:text-gray-600
                    focus:border-gray-400 dark:focus:border-white/30
                    focus:ring-2 focus:ring-gray-200 dark:focus:ring-white/10"
                />
              </div>
            </div>
          </div>

          {/* Live balance preview */}
          {(form.amount || form.totalFee) && (
            <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold
              ${isAmountInvalid
                ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/40 text-red-700 dark:text-red-400"
                : balance <= 0
                ? "bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700/40 text-emerald-700 dark:text-emerald-400"
                : "bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/40 text-amber-700 dark:text-amber-400"
              }`}>
              <span>{isAmountInvalid ? "Invalid amount" : balance <= 0 ? "✓ Fully paid" : "Balance remaining"}</span>
              <span className="font-mono">
                {isAmountInvalid
                  ? "Amount exceeds total fee"
                  : balance <= 0
                    ? "₹0 due"
                    : `₹${balance.toLocaleString()} due`}
              </span>
            </div>
          )}

          {formError && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 dark:border-red-700/40 dark:bg-red-900/20 dark:text-red-400">
              {formError}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="submit"
              disabled={submitting || isAmountInvalid}
              className="flex-1 flex items-center justify-center gap-2 h-10 rounded-lg text-sm font-semibold transition-all disabled:opacity-60
                bg-gray-900 text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              {submitting && (
                <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
              )}
              {submitting ? "Saving…" : editData ? "Update Payment" : "Save Payment"}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-10 px-4 rounded-lg text-sm font-semibold transition-colors
                border border-gray-200 dark:border-white/10
                bg-white dark:bg-white/5
                text-gray-700 dark:text-gray-300
                hover:bg-gray-50 dark:hover:bg-white/10"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}