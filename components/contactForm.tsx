"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function ContractForm({ open, setOpen, onSuccess, initialData = null }) {
  const [form, setForm] = useState({
    description: "",
    date: "",
    signature: "",
    reference: "",
    clientEmail: "",
  })

  useEffect(() => {
    if (initialData) {
      setForm({
        description: initialData.description || "",
        date: initialData.signedDate ? new Date(initialData.signedDate).toISOString().split('T')[0] : "",
        signature: initialData.signature || "",
        reference: initialData.reference || "",
        clientEmail: initialData.clientEmail || "",
      })
    } else {
      setForm({
        description: "",
        date: "",
        signature: "",
        reference: "",
        clientEmail: "",
      })
    }
  }, [initialData, open])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const method = initialData ? "PUT" : "POST"
    const url = initialData ? `/api/contracts/${initialData._id}` : "/api/contracts"

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    console.log(form)

    setOpen(false)
    onSuccess()
  }

  const isEditing = !!initialData

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>

        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100 dark:border-white/10">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
              className="text-gray-600 dark:text-gray-300">
              <path d="M3 7h18" />
              <path d="M3 12h18" />
              <path d="M3 17h18" />
            </svg>
          </div>
          <div>
            <DialogTitle className="text-sm font-bold text-gray-900 dark:text-white">
              {isEditing ? "Edit Contract" : "New Contract"}
            </DialogTitle>
            <DialogDescription className="text-xs text-gray-400 dark:text-gray-500">
              {isEditing ? "Update contract details and save" : "Fill in contract details and save"}
            </DialogDescription>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <textarea
            placeholder="Contract description"
            className="w-full border p-2 rounded"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <input
            type="date"
            className="w-full border p-2 rounded"
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Signature (type name)"
            className="w-full border p-2 rounded"
            value={form.signature}
            onChange={(e) =>
              setForm({ ...form, signature: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Reference"
            className="w-full border p-2 rounded"
            value={form.reference}
            onChange={(e) =>
              setForm({ ...form, reference: e.target.value })
            }
          />
          <input
  type="email"
  placeholder="Client Email"
  className="w-full border p-2 rounded"
  value={form.clientEmail}
  onChange={(e) =>
    setForm({ ...form, clientEmail: e.target.value })
  }
/>

          <Button type="submit" className="w-full">
            {isEditing ? "Update Contract" : "Save Contract"}
          </Button>

        </form>

      </DialogContent>
    </Dialog>
  )
}